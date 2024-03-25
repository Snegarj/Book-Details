const exportToCsv = (data) => {
    const csvContent = [
      'ID,Author,Country,Language,Link,Pages,Title,Year',
      ...data.map((item) => `${item.id},${item.author},${item.country},${item.language},${item.link},${item.pages},${item.title},${item.year}`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

export default exportToCsv;