import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
// import axios from "axios";

export default function Form({ handleAddTickets }) {
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [acc, setAcc] = useState();

    const handleSubmit = () => {
        const payload = {
            id: id,
            title: title,
            description: desc,
            acceptance_criteria: acc,
        };
        //console.log(payload)
        // POST
        // axios({
        //     method: "POST",
        //     url: URL,
        //     responseType: "stream",
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods": "POST",

        //         "Access-Control-Allow-Headers": "Content-Type,Authorisation",
        //     },
        //     body: {
        //         payload,
        //     },
        // }).then((response) => {
        //     //console.log(response.data);
        //     handleAddTickets(response.data);
        // });
        const URL =
            "http://ec2-3-26-42-153.ap-southeast-2.compute.amazonaws.com:5000/sendTicket";
        const postRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        };
        fetch(URL, postRequestOptions)
            .then((response) => response.json())
            // .then((response) => console.log(response.data))
            .then((response) => handleAddTickets(response.data))
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <h1></h1>
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Ticket ID"
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Title"
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-multiline-static"
                        label="Acceptance Criteria"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        style={{
                            width: "95%",
                        }}
                        onChange={(e) => setAcc(e.target.value)}
                    />
                </div>
            </Box>
            <div
                style={{
                    marginLeft: "8px",
                    marginTop: "10px",
                    //  backgroundColor: "white",
                    color: "green",
                }}
            >
                <Button
                    variant="contained"
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleSubmit()}
                >
                    Search similar tickets
                </Button>
            </div>
        </>
    );
}
