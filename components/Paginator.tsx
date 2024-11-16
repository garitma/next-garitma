import Button from "@aura-design/system/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Paginator = ({ posts }) => {
  const handleOnNext = !posts.next_page
    ? ""
    : `/blog?page=${Number(posts.page + 1)}`;

  const handleOnPrev = !posts.prev_page
    ? ""
    : posts.page === Number(2)
      ? "/blog"
      : `/blog?page=${Number(posts.page - 1)}`;

  return (
    <div className="pad smosh">
      <ul className="nav-list">
        <li className="item">
          <Link href={handleOnPrev}>
            <Button mode="link" isDisabled={!posts.prev_page}>
              <ChevronLeftIcon className="icon h4" />
            </Button>
          </Link>
        </li>
        <li>
          <span>{posts.page}</span> de <span>{posts.total_pages}</span>
        </li>
        <li className="item">
          <Link href={handleOnNext}>
            <Button mode="link" isDisabled={!posts.next_page}>
              <ChevronRightIcon className="icon h4" />
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Paginator;
