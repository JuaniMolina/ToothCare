import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userActive: {},
    userAppointments: []
}

export const userSlice = createSlice({
    name:"UserData",
    initialState: initialState,
    reducers:{
        addUserActive: (state, action) => {
            state.userActive = action.payload;
        },
        logOutUser: (state, action)=>{
            state.userActive = {},
            state.userAppointments=[]
        },
        setAppointments:(state, action) =>{
            state.userAppointments = action.payload
        },
        cancelAppointment:(state, action) => {
            state.userAppointments = state.userAppointments.map((appointment)=>{
                if(appointment.id === action.payload){
                    return  {...appointment, status:'cancelled'}
                }
                return appointment;
            })
        }
    }
});

export const { addUserActive, logOutUser, setAppointments, cancelAppointment } = userSlice.actions;