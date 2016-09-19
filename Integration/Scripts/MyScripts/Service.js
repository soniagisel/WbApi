app.service("StudentService", function ($http) {
    //Create new record
    this.post = function (Student) {
        var request = $http({
            method: 'post',
            url: '/api/StudentsAPI',
            data: Student
        });
        return request;
    };

    //get sigle records
    this.get = function (Id) {
        return $http.get('/api/StudentsAPI/' + Id);
    };

    //get all students
    this.getStudents = function () {
        return $http.get('/api/StudentsAPI/')
    };

    //update the Record
    this.update = function (Id, Student) {
        var request = $http({
            method: 'put',
            url: '/api/StudentsAPI/' + Id,
            data: Student
        });
        return request;
    };

    //delete the Record
    this.delete = function (Id) {
        var request = $http({
            method: 'delete',
            url: '/api/StudentsAPI/' + Id
        });
        return request;
    };
});