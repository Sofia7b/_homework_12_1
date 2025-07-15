let saveUrl = "";

const myButtonFirst = document.getElementById("myButtonFirst");
myButtonFirst.addEventListener("click", function () {
  const userUrl = prompt("Введіть посилання...");

  if (!userUrl || !userUrl.trim()) {
    alert("Ви нічого не ввели!");
    return;
  }
  const trimmedUrl = userUrl.trim();

  if (/^\d+$/.test(trimmedUrl)) {
    alert("Ви ввели лише цифри. Це не є посиланням!");
    return;
  }

  if (/^[\p{L}]+$/u.test(trimmedUrl)) {
    alert("Це не схоже на посилання");
    return;
  }

  if (!/^https?:\/\/.+/i.test(trimmedUrl)) {
    alert("Введіть коректне посилання, яке починається з http:// або https://");
    return;
  }
  saveUrl = trimmedUrl;
  alert("Посилання збережено!");
});

const myButtonSecond = document.getElementById("myButtonSecond");

myButtonSecond.addEventListener("click", function () {
  if (saveUrl) {
    window.open(saveUrl, "_blank");
  } else {
    alert("Спочатку введіть посилання");
  }
});
