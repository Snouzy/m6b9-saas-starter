import { User } from "@prisma/client";

import { SessionUser } from "@/utils/auth-client";

export function displayName(user: User): string {
  console.log("user:", user);
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
