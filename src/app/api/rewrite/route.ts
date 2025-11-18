import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { text, style } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const prompt = `Rewrite the following text in a ${style || 'professional'} style. Make it more engaging and optimized for web content while maintaining the original meaning:

Original text: "${text}"

Rewritten version:`;

    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NVIDIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: [
          {
            role: 'system',
            content: 'You are an expert content rewriter who creates engaging, SEO-friendly web content.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.status}`);
    }

    const data = await response.json();
    const rewrittenText = data.choices[0]?.message?.content?.trim();

    if (!rewrittenText) {
      return NextResponse.json({ error: 'Failed to generate rewritten text' }, { status: 500 });
    }

    return NextResponse.json({ rewrittenText });

  } catch (error) {
    console.error('NVIDIA API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}