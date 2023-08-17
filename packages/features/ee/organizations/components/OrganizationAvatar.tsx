import classNames from "@calcom/lib/classNames";
import { getPlaceholderAvatar } from "@calcom/lib/defaultAvatarImage";
import { Avatar } from "@calcom/ui";
import type { AvatarProps } from "@calcom/ui";

type OrganizationAvatarProps = Pick<
  AvatarProps,
  "size" | "imageSrc" | "alt" | "indicator" | "gravatarFallbackMd5"
> & {
  organizationName?: string | null;
  organizationLogo?: string | null;
};

const OrganizationAvatar = ({
  size,
  imageSrc,
  alt,
  organizationName,
  organizationLogo,
  gravatarFallbackMd5,
}: OrganizationAvatarProps) => {
  return (
    <Avatar
      size={size}
      imageSrc={imageSrc}
      alt={alt}
      gravatarFallbackMd5={gravatarFallbackMd5}
      indicator={
        (organizationLogo || organizationName) && (
          <div
            className={classNames("absolute bottom-0 right-0 z-10", size === "lg" ? "h-3 w-3" : "h-10 w-10")}>
            <img
              src={getPlaceholderAvatar(organizationLogo, organizationName)}
              alt={alt}
              className="flex h-full items-center justify-center rounded-full ring-2 ring-white"
            />
          </div>
        )
      }
    />
  );
};

export default OrganizationAvatar;
