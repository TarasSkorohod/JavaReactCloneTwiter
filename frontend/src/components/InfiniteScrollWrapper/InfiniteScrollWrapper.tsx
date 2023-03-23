import {FC, ReactNode, ReactElement, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface InfiniteScrollWrapperProps {
    children: ReactNode;
    dataLength: number;
    pagesCount: number;
    loadItems: (page: number) => void;
}

const InfiniteScrollWrapper: FC<InfiniteScrollWrapperProps> = (
    {
        children,
        dataLength,
        pagesCount,
        loadItems
    }
): ReactElement => {
    const [page, setPages] = useState(1);

    const loadNextPage = (): void => {
        loadItems(page);
        setPages(prevState => prevState + 1);
    }
    return (
        <InfiniteScroll
            style={{overflow: "unset"}}
            next={loadNextPage}
            hasMore={page < pagesCount}
            loader={null}
            dataLength={dataLength}
            scrollableTarget="scrollableDiv"
        >
            {children}
        </InfiniteScroll>
    );
}
export default InfiniteScrollWrapper