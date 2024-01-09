class DateUtils {
    static addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
  
    static compareDates(date1, date2) {
      return date1.getTime() - date2.getTime();
    }
  
  
    static isWeekday(date) {
      const day = date.getDay();
      return day !== 0 && day !== 6; 
    }
  
    static calculateAge(birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      return age;
    }
  }
  
  export default DateUtils;
  