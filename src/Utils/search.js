const searchQuiz = (quizes,searchQuery)=>{
    return quizes.filter((quiz) => {
        // if no input then return the original
        if (searchQuery === '') {
            return quiz;
        }
        //return the quiz which contains the user input
        else {
            return quiz?.name?.toLowerCase().includes(searchQuery)
        }
    })
}
export {searchQuiz}