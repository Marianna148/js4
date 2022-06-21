first = prompt("Скільки буде 2+2?");
second = prompt("Сонце встає на сході?");
third = prompt("Скільки буде 5 / 0?");
fourth = prompt("Якого колькору небо?");
fifth = prompt("Яка правильна відповідь на головне питання життя, всесвіту і вього такого?");

answer = 0;

if(first == 4) answer += 10;
if(second == "так") answer += 10;
if(third == "не можна ділити на нуль") answer += 10;
if(fourth == "блакитне") answer += 10;
if(fifth == 42) answer += 10;

switch(answer) {
    case 0:
        alert(`Твій бал ${answer}! Спробуй ще раз!`);
        break;
    case 10:
        alert(`Твій бал ${answer}! Ти явно щось наплутав!`);
        break;
    case 20:
        alert(`Твій бал ${answer}! Так вже краще!`);
        break;
    case 30:
        alert(`Твій бал ${answer}! Це вже непоганий результат!`);
        break;
    case 40:
        alert(`Твій бал ${answer}! Ти розумний!`);
        break;
    case 50:
        alert(`Твій бал ${answer}! Молодчина! Так тримати!`);    
        break;
    default:
        alert("Ой, щось пішло не так")
}