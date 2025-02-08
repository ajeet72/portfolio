import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const initialDate = moment().subtract(5, 'd').format();

const markCommit = (x, y) => {
    const date = moment()
        .subtract(1, "y")
        .add(1, "d")
        .add(x, "w")
        .add(y, "d")
        .format();
    return date;
};

const data = {
    date: initialDate,
};

const writeFileAndCommit = async () => {
    try {
        // Write data to JSON file
        await jsonfile.writeFile(path, data);
        
        const git = simpleGit();
        
        // Add the file to the git staging area
        await git.add([path]);
        
        // Commit the file with the generated date and push to GitHub
        const commitDate = markCommit(2, 3);
        await git.commit(commitDate, [path], {'--date': commitDate});
        await git.push();
        ///git.push( ) gitSimple.
        
        console.log('Data successfully written to file and committed!');
    } catch (err) {
        console.error('Error during Git operations:', err);
    }
};

writeFileAndCommit();


















// import jsonfile from "jsonfile";

// import moment from "moment";
// import simpleGit  from "simple-git";
// import random from "random";

// const path = "./data.json";
// const date = moment().subtract(5,'d').format();

// const markCommit = (x,y) => {
//     const date = moment()
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(x, "w")
//     .add(y, "d")
//     .format();
// }



// const data ={
//     date: date,
// };

// jsonfile.writeFile(path,data, () => {
//     simpleGit().add([path]).commit(date,{'--date':date}).push();

// });
// markCommit(2,3);

