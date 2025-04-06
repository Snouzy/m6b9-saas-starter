type User = {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
};

export function displayName(user: User): string {
  console.log("user:", user);
  return user.firstName || user.lastName
    ? displayFullName({ firstName: user.firstName ?? "", lastName: user.lastName ?? "" })
    : user.email
        .split("@")[0]
        .replaceAll(".", " ")
        .replace(/^\w/, (c) => c.toUpperCase());
}

export function displayFullName({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName} ${lastName}`;
}
