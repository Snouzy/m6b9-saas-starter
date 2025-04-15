import { UserDropdown } from "@/features/user/ui/UserDropdown";
import { SessionUser } from "@/entities/user/types/session-user";
import { displayName } from "@/entities/user/lib/display-name";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const LoggedInButton = ({ user, showName = true }: { user: SessionUser; showName?: boolean }) => {
  return (
    <UserDropdown>
      <Button size="small" variant="outline">
        <Avatar className="bg-card size-6 hover:cursor-pointer lg:mr-2">
          <AvatarFallback className="bg-card">{user.email.slice(0, 1).toUpperCase()}</AvatarFallback>
          {user.image && <AvatarImage src={user.image} />}
        </Avatar>
        {showName && <span className="max-lg:hidden">{displayName(user)}</span>}
      </Button>
    </UserDropdown>
  );
};
