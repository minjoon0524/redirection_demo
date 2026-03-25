    function formatKSTTime() {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });

      const parts = formatter.formatToParts(now);
      const map = {};
      parts.forEach(part => {
        map[part.type] = part.value;
      });

      return `${map.year}.${map.month}.${map.day}(${map.weekday}) ${map.hour}:${map.minute}:${map.second} GMT+0900 (한국 표준시)`;
    }

    document.getElementById("timeText").textContent = formatKSTTime();