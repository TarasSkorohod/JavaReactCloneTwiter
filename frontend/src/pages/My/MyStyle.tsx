import { makeStyles, Theme } from "@material-ui/core";

export const useMyStyles = makeStyles((theme: Theme) => ({
    info: {
        padding: "40px 20px",
        textAlign: "center",
        "& .MuiTypography-subtitle1": {
            marginTop: 12,
            marginBottom: 20
        }
    },
    infoButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        justifyContent: "space-between",
        "& .MuiTypography-h5": {
            marginLeft: 16,
            display: "inline-block",
            verticalAlign: "middle"
        }
    },
    headerIcon: {
        paddingRight: 10
    },
    addForm: {
        padding: "72px 20px 0px 20px"
    },
    divider: {
        height: 12,
        backgroundColor: theme.palette.divider
    }
}));
