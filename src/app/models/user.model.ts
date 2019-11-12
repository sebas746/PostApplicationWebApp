export class User {
    constructor(
        public userId?: number,
        public username?: string,
        public password?: string,
        public userFirstName?: string,
        public userLastName?: string,
        public userEmail?: string
    ) {}
}