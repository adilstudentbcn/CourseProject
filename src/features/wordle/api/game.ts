import useAsync from "../../../shared/useAsync";

export async function fetchSecretWord(): Promise<string> {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  const words = ["react", "logic", "state", "codes", "dizzy"];
  return words[Math.floor(Math.random() * words.length)];
}

export function useSecretWord() {
  return useAsync(fetchSecretWord);
}
