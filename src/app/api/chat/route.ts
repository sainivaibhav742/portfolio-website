import { NextRequest, NextResponse } from 'next/server';

const portfolioData = `
Vaibhav Saini is an AI-Powered Web Developer & SEO Specialist with expertise in:

SKILLS:
- Web Development: React, Next.js, TypeScript, Tailwind CSS, Node.js
- AI/ML: Python, Machine Learning, OpenAI API, LangChain
- SEO: Search Engine Optimization, Content Strategy, Analytics
- Creative: UI/UX Design, Digital Marketing, Content Creation

PROJECTS:
1. Portfolio Website (Current): Next.js, Tailwind CSS, Framer Motion, AI integrations
2. SEO Analysis Tools: Built custom SEO analysis and content optimization tools
3. AI Content Rewriter: Developed AI-powered content enhancement tools
4. Web Applications: Created responsive web apps with modern frameworks

EXPERIENCE:
- Full-stack web development with modern JavaScript frameworks
- AI integration in web applications using OpenAI and LangChain
- SEO optimization and content strategy implementation
- UI/UX design with focus on user experience and accessibility

CONTACT:
- Available for freelance projects and collaborations
- Specializes in AI-powered web solutions and SEO optimization
- Based in India, open to remote work worldwide
`;

const systemPrompt = `You are Vaibhav Saini's AI portfolio assistant. You have access to the following information about Vaibhav:

${portfolioData}

Guidelines:
- Be friendly, professional, and helpful
- Answer questions about Vaibhav's skills, experience, and projects
- If asked about something not in the provided information, politely say you don't have that specific information but can share what you know about Vaibhav's expertise
- Keep responses concise but informative (under 150 words)
- Encourage potential clients or collaborators to reach out
- Highlight Vaibhav's expertise in AI, web development, and SEO
- Use a conversational, approachable tone`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Prepare messages for NVIDIA API
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ];

    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: messages,
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content?.trim();

    if (!aiResponse) {
      return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
    }

    return NextResponse.json({
      response: aiResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request. Please try again.' },
      { status: 500 }
    );
  }
}