import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "../../auth/authSlice"
import { MODE } from "@env"

const baseQuery = fetchBaseQuery({
    baseUrl: MODE == "DEV" ? "http:localhost:3000" : "TO BE DEFINED IN PROD",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token)
            headers.set("authorization",  `Bearer ${token}`)
        return headers
    }
})