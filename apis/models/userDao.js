const database = require('./dataSource');

const signUp = async (userName, password, fullName, phoneNumber, address, birth, gender) => {
    try {
        return await database.query(
            `INSERT INTO users(
                username,
                password ,
                fullname,
                phone_number,
                address,
                birth,
                gender
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
            [userName, password, fullName, phoneNumber, address, birth, gender]
        );
    }
    catch (err) {
        const error = new Error('INVALID_DAATA_INPUT');
        error.statusCode = 530;
        throw error;
    }
}

const checkUsername = async (userName) => {
    try {
        console.log(userName)
        const [user] = await database.query(
            `SELECT 
                *
            FROM users
            where username = ?`
            , [userName]
        );
        return user;
    }
    catch (err) {
        const error = new Error(`INVALID_DATA_INPUT`);
        error.statusCode = 500;
        throw error;
    }
}


module.exports = {
    signUp,
    checkUsername
}    