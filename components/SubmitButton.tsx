"use client";

interface SubmitButtonProps {
  isPending: boolean;
}

export default function SubmitButton({ isPending }: SubmitButtonProps) {
  return isPending ? (
    <button disabled type="submit">
      در حال ورود...
    </button>
  ) : (
    <button type="submit">ورود</button>
  );
}
