db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS members_full (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    memberId TEXT,
    name TEXT,
    phone TEXT UNIQUE,
    email TEXT,
    dob TEXT,
    lineUid TEXT,
    type TEXT,
    note TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )`);
});

app.post("/api/register-full", (req, res) => {
  const m = req.body;
  db.run(`INSERT INTO members_full (memberId, name, phone, email, dob, lineUid, type, note)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [m.memberId, m.name, m.phone, m.email, m.dob, m.lineUid, m.type, m.note], (err) => {
      if (err) return res.status(400).json({ error: "เบอร์นี้มีอยู่แล้ว หรือข้อมูลไม่ถูกต้อง" });
      res.json({ success: true });
  });
});
