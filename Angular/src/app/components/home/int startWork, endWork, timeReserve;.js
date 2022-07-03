int startWork, endWork, timeReserve;
int reserveNumber=(endWork-startWork)*60*7/timeReserve;

interface Reserve{
    status: int; // 0:free 1:full 2:cancel
    timeReserve: int;
}
//initialize
function initReserve(){
    for i=0 to reserveNumber-1
        Reserve[i].status = 0;

    end
}

//reserve
function Reserve(){
    int isReserved = 0; 

    for i=0 to reserveNumber-1
        if Reserve[i].status == 0
            Reserve[i].status = 1;
            isReserved = 1;
            return i;

        end
    end
    if t == 0
        return 0;
    end

}

//Doctor cancel
function Doctor_cancelReserve(dayOfWeek, start, end){
    startOfCancel = dayOfWeek * start;

    endOfCancel = dayOfWeek * end;
    reserveId = startOfCancel/timeReserve;

    reserveNumber = (endOfCancel-startOfCancel)/timeReserve;
    for (int i =reserveId;i<(reserveNumber+reserveId);i++){
        Reserve[i].status = 2;
    }

}
// shift
function shift(doctorEnteryTime, dayOfWeek){
    startOfShift = dayOfWeek * doctorEntery;
    reserveId = (startOfShift)/timeReserve;
    endDay = endWork*dayOfWeek;
    endDayReserve = endDay/timeReserve;
    begin2Shift = dayOfWeek*startWork;
    t=Reserve[begin2Shift];
    for (int i =reserveId;i<endDayReserve;i++){

        Reserve[i+1]=Reserve[i];
    }
}
