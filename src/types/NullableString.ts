import { type } from "os";

export type NullableString = String | null;

export type User = {
    id: NullableString;
    name: NullableString;
    email: NullableString;
}

export type AdminUser = {
    [key: string | symbol]: any
}
