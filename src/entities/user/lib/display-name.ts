import { SessionUser } from "@/entities/user/types/session-user";

export function displayName(user: SessionUser): string {
  return user.name
    ? user.name
    : user.email
        .split("@")[0]
        .replaceAll(".", " ")
        .replace(/^\w/, (c) => c.toUpperCase());
}

export function displayFullName({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName} ${lastName}`;
}

export function displayFirstNameAndFirstLetterLastName(user: SessionUser): string {
  return user.name;
}
