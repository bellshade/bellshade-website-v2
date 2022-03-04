import Image from "next/image";

const MemberCard = ({ login, name, html_url, avatar_url }) => {
  const dummyImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAPtJREFUeF7t0rENAAAMwrDy/9M9wmvYs1jsGgmM6uILEE8QYIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHhggCmDeAwNEAcx7YIAogHkPDBAFMO+BAaIA5j0wQBTAvAcGiAKY98AAUQDzHoiAD0PoAFE/HRk+AAAAAElFTkSuQmCC";
  return (
    <div className="team-card m-5">
      <div
        className="mx-auto relative max-w-max tooltip top"
        pesan={name === null ? login : name}
      >
        <div className="relative flex justify-center items-center rounded-full overflow-hidden w-20 h-20 shadow-md">
          <Image
            src={avatar_url ? `${avatar_url}&s=80` : dummyImage}
            alt={login}
            layout="fill"
            className="w-full rounded-full"
          />
        </div>
        <a
          className="absolute bottom-0 right-0 flex justify-center items-center rounded-full w-6 h-6 bg-white"
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
      <div className="text-center pt-3 max-w-[220px] m-auto">
        <span
          title={name === null ? login : name}
          className="name md:text-lg font-semibold text-ellipsis whitespace-normal overflow-hidden"
        >
          {name === null ? login : name}
        </span>
      </div>
    </div>
  );
};

export default MemberCard;