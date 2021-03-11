class FileHandling {

    // Sets variable 'myData' in localStorage
    setData(data : string, dataName : string){
        localStorage.setItem(dataName, data);
    }

    // Gets variable myData in localStorage
    getData(dataName : string) : string | null {
        return localStorage.getItem(dataName);
    }
}

export default FileHandling;