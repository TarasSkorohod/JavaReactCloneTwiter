import {QuoteTweetResponse, TweetResponse} from "../../types/tweet";
import {FC, ReactElement} from "react";

export interface AddTweetFormProps {
    unsentTweet?: TweetResponse;
    quoteTweet?: QuoteTweetResponse;
    maxRows?: number;
    minRows?: number;
    tweetId?: number;
    title: string;
    buttonName: string;
    addressedUsername?: string;
    addressedId?: number;
    onCloseModal?: () => void;
}

export interface ImageObj {
    src: string;
    file: File;
}

const MAX_LENGTH = 280;



const AddTweetForm: FC<AddTweetFormProps> = (
    {
        unsentTweet,
        quoteTweet,
        maxRows,
        minRows,
        tweetId,
        title,
        buttonName,
        addressedUsername,
        addressedId,
        onCloseModal
    }
): ReactElement => {
    return (

      <div>
          Sravca
      </div>
    );
}
export default AddTweetForm