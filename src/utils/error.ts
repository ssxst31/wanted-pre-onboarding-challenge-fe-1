export default function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error;
  return error as any;
}
