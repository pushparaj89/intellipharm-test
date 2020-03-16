// export interface Task {
//     id: number;
//     description: string;
// }


export enum EHTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}
export interface IMembers {
    id: number;
    firstname: string;
    surname: string;
    email: string;
    gender: string;
};


/**
 * Global state interfaces
 */
export interface IApiState {
    members: IMembers[];
    isLoading: boolean;
    error: Error | null;
}


export interface IStore {
    apiState: IApiState;

}


