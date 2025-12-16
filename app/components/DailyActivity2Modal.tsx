'use client'

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { textfieldStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
export const DailyActivity2 = () => {
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Daily Activity & Lifestyle II
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={textfieldStyles}>
                        <InputLabel id="gender-status">Gender</InputLabel>
                        <Select labelId="gender-status" id="gender" label="Gender" name="gender">
                            <MenuItem value="Not Started">Male</MenuItem>
                            <MenuItem value="In Progress">Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={textfieldStyles}>
                        <InputLabel id="family-status">Do you have overweight history in the family?</InputLabel>
                        <Select labelId="family-status" id="gender" label="Do you have overweight history in the family? " name="gender">
                            <MenuItem value="Not Started">Yes</MenuItem>
                            <MenuItem value="In Progress">No</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <TextField label="Age" sx={textfieldStyles}/>
                <TextField label="Height (m)" sx={textfieldStyles}/>
                <TextField label="Weight (kg)" sx={textfieldStyles}/>
            </div>
        </div>
    );
}