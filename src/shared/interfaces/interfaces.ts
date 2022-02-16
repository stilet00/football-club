import { Moment } from "moment/moment";

export interface Player {
    id?: string;
    name: string;
    surname: string;
    photo: {
        preview:
            string;
    };
    birthDate: Moment | string;
    gamesPlayed: string;
    price: string;
    edited: Moment | null;
    timeOnField: string;
    goals: string;
};

export interface Players extends Array<Player>{}