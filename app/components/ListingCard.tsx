import Image from "next/image";
import { useCountries } from "../lib/getCountries";
import Link from "next/link";
import { AddToFavoriteButton, DeleteFormFavoriteButton } from "./SubmitButton";
import { addToFavorite, removeFromFavorite } from "../actions";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isInFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathname: string;
}

export function ListingCard({
  description,
  imagePath,
  location,
  price,
  userId,
  isInFavoriteList,
  favoriteId,
  homeId,
  pathname,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  return (
    <div className="flex flex-col">
      <div className="relative h-72 xl:h-64">
        <Image
          src={`https://xdvrzwesalvysoqyaajt.supabase.co/storage/v1/object/public/images/${imagePath}`}
          className="rounded-lg h-full object-cover mb-3"
          alt="Image if House"
          fill
        />
        {userId && (
          <div className="z-10 absolute top-2 right-2">
            {isInFavoriteList ? (
              <form action={removeFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathname" value={pathname} />
                <DeleteFormFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathname" value={pathname} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`}>
        <h3 className="font-medium text-base mt-2">
          {country?.flag} {country?.label} / {country?.region}
        </h3>
        <p className="text-muted-foreground text-sm !line-clamp-2">
          {description}
        </p>
        <p className="pt-2 text-muted-foreground">
          <span className="font-medium text-black">${price}</span> Night
        </p>
      </Link>
    </div>
  );
}
