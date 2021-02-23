class FileHandling {

    // Sets variable 'myData' in localStorage
    setData(data : string){
        localStorage.setItem('myData', data);
    }

    // Gets variable myData in localStorage
    getData(){
        let data = localStorage.getItem('myData');
    }
}

export default FileHandling;