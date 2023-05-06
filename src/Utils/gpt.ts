const fetchCompletion = async () => {
  const OPENAI_API_KEY = "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";
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${OPENAI_API_KEY}`);

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error fetching completion:", error);
  }
};

export default fetchCompletion;
