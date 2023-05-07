interface GPTParams {
  content: string;
}

interface GPTResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const callChatGPT = async (params: GPTParams): Promise<string> => {
  const OPENAI_API_KEY = "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";
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: params.content }],
    }),
  });

  const json = (await response.json()) as GPTResponse;

  const message = json.choices[0].message.content;

  return message;
};
