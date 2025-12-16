'use client'

import { FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { textfieldStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
export const EatingHabits = () => {
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Eating Habits
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={textfieldStyles}>
                       <FormLabel> Do you eat high caloric food frequently</FormLabel>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={textfieldStyles}>
                        <InputLabel id="meal-status">How many main meals do you have daily?</InputLabel>
                        <Select labelId="meal-status" id="gender" label="Do you have overweight history in the family? " name="gender">
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