import {InputAdornment, Select, SelectProps, styled} from "@material-ui/core";
import {ArrowBottomIcon} from "../../icons";


export const FilledSelect = styled((props: SelectProps) => (
    <Select
        {...props}
        endAdornment={
            <InputAdornment position="end">
                {ArrowBottomIcon}
            </InputAdornment>
        }
    />
))(({ theme }) => ({
    "& .MuiSelect-filled": {
        border: `1px solid ${theme.palette.grey[100]}`,
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "transparent",
        zIndex: 2,
        "&:hover": {
            backgroundColor: "transparent"
        },
        "&:focused": {
            border: 0
        }
    },
}));