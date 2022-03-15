import { Moment } from "moment/moment";

export interface Player {
    id?: string;
    name: string;
    surname: string;
    photo: {
        preview:
            string;
    };
    birthDate: Moment | string | null;
    gamesPlayed: string;
    price: string;
    edited: Moment | null;
    timeOnField: string;
    goals: string;
};

export interface Players extends Array<Player>{}