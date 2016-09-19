app.controller('studentController', function ($scope, StudentService) {
    //The flag for the new record
    $scope.IsNewRecord = 1;
    loadRecords();

    //function to load all the students records
    function loadRecords() {
        var promiseGet = StudentService.getStudents();
        promiseGet.then(function (pl) {
            $scope.Students = pl.data;
            $scope.ID = pl.data[pl.data.length - 1].ID;
        }),
        function (errorPl) {
            $log.error("Failure loading Student", errorPl);
        };

        //The save scope method use to define the Student object.
        //In this method if IsNewRecord is not zero, then update student,
        //else Create the student information to the server.
        var Student;

        $scope.add = function (Id, Student) {
            //if the flag is 1 then it is new record
            Student = {
                ID: $scope.ID,
                StudentName: $scope.StudentName,
                StudentRollNo: $scope.StudentRollNo,
                StudentDepartment: $scope.StudentDepartment,
                StudentbatchNo: $scope.StudentbatchNo,
                StudentYear: $scope.StudentYear
            }

            var promisePost = StudentService.post(Student);
            promisePost.then(function (pl) {
                loadRecords();
            }), function (err) {
                console.log('Error ' + err);
            }
        }

        $scope.edit = function (Student) {
            var promisePut = StudentService.update($scope.ID, Student);
            promisePut.then(function (pl) {
                console.log(pl);
                console.log($scope.ID);
                $scope.Message = "Updated Succesfully";
                loadRecords();
            }), function (err) {
                console.log('Error ' + err);
            };
        }
    }

    //Method to delete
    $scope.delete = function () {
        var promiseDelete = StudentService.delete($scope.ID);
        promiseDelete.then(function (pl) {
            $scope.Message = "Deleted Successfuly";
            StudentName = "";
            StudentRollNo = "";
            StudentDepartment = "";
            StudentbatchNo = "";
            StudentYear = "";
            loadRecords();
        }), function (err) {
            console.log('Error ' + err);
        };
    }

    //Method to get single student based on the ID
    $scope.get = function (Student) {
        var promiseGetSingle = StudentService.get(Student.ID);
        promiseGetSingle.then(function (pl) {
            var res = pl.data;
            console.log(res);
            $scope.ID = res.ID;
            $scope.StudentName = res.StudentName;
            $scope.StudentRollNo = res.StudentRollNo;
            $scope.StudentDepartment = res.StudentDepartment;
            $scope.StudentbatchNo = res.StudentbatchNo;
            $scope.StudentYear = res.StudentYear;
            $scope.IsNewRecord = 0;
        }, function (errorPl) {
            console.log("Failure loading student ", errorPl);
        });
    }

    //Clear the scope models
    $scope.clear = function () {
        $scope.IsNewRecord = 1;
        $scope.ID = $scope.ID +1;
        $scope.StudentName = "";
        $scope.StudentRollNo = "";
        $scope.StudentDepartment = "";
        $scope.StudentbatchNo = "";
        $scope.StudentYear = "";
    }
});