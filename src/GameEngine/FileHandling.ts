class FileHandling {

    // Sets variable 'myData' in localStorage
    setData(data : string){
        localStorage.setItem('myData', data);
    }

    // Gets variable myData in localStorage
    getData() : string | null {
        return localStorage.getItem('myData');
    }
}

export default FileHandling;