import React, {FC, ReactElement} from "react";
import {useGlobalStyles} from "../../util/globalClasses";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {Button, Divider, Paper, Typography} from "@material-ui/core";
import classnames from "classnames";
import TopTweetActions from "../Home/TopTweetActions/TopTweetActions";
import AddTweetForm from "../../components/AddTweetForm/AddTweetForm";
import Welcome from "../../components/Welcome/Welcome";
import TweetComponent from "../../components/TweetComponent/TweetComponent";
import Spinner from "../../components/Spinner/Spinner";
import {useMyStyles} from "./MyStyle";
import {LITTLE_SECRET} from "../../constants/url-constants";

const My: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useMyStyles();
    return (



        <Paper className={globalClasses.pageContainer} variant="outlined">
            <Paper className={classnames(globalClasses.pageHeader, classes.header)} variant="outlined">
                <Typography variant="h6">
                    10000010000010000010000010000010010001001001
                </Typography>
            </Paper>
            <div className={classes.addForm}>
                <AddTweetForm title={"What's happening?"} buttonName={"Tweet"} />
            </div>
            <Divider />
            <div className={classes.info}>
                <Typography variant={"h5"} component={"div"}>
                    1010100100111110100001000001010
                    01110001011000011101001010001011010100
                </Typography>
                <Typography variant={"subtitle1"} component={"div"}>
                    <p className={globalClasses.contentLink}>
                        10011001101001111001111101001
                        10010111011101011001000001110
                        10011010001100101111001011001
                        01100000110100111100111000001
                        10111011011111000001110100110
                        10011101101110010110000011101
                        00110111110000011101111100001
                        11010011110100101100100000100
                        10011000001101000110000111101
                        10110010110000011101101100101
                        11100101111001100000111001111
                        00101110001111100101100101111
                        01001000001101001110111011001
                        10110111111100101101101110000
                        11110100110100111011111101110
                        10000011010011101110100000110
                        01101110010110111111011101110
                        10010000011011111100110100000
                        11110011101111111010110110010
                        00001110111110100011010011100
                        01111010001000001001001100000
                        11101011101110110001111011111
                        11011011001011110010110010111
                        00100100000110011011100101101
                        11111011011000001110011110010
                        11100011111001011001011110100
                        10000011010011101110111010011
                        00101110110011011001101001110
                        01111100101110111011000111100
                        10110000011000011110010110001
                        11101000110100111101101100101
                        11100111011001000001001001100
                        00011010001100001111011011001
                        01100000111011011001011110010
                        11110011000001110011110010111
                        00011111001011001011110100100
                        00011010011101110110011011011
                        11111001011011011100001111010
                        01101001110111111011101011101
                        01110101110111001111101001101
                        11111100001011001000001001001
                        10000011000111100001110111010
                        01111110100100000111010011000
                        01110110011010111011101011101
                        01110111010011010001100101111
                        10011000001100110110111111101
                        01110111011001001000001101101
                        11001011011001000001110010111
                        01011101110100000110000111101
                        11110000111110011011001000001
                        11100111011111110101100000110
                        01001101001110010011011101001
                        11111010010000011010001100101
                        11000011110010100000110000111
                        01110111100111101001101000110
                        1001110111011001111010
                    </p>


                </Typography>
                <div className={classes.infoButtonContainer}>
                </div>
             </div>

        </Paper>


    )
}
export default My