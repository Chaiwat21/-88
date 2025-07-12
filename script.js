function submitMember() {
  const member = {
    memberId: document.getElementById("memberId").value.trim(),
    lineUid: document.getElementById("lineUid").value.trim(),
    name: document.getElementById("name").value.trim(),
    dob: document.getElementById("dob").value,
    phone: document.getElementById("phone").value.trim(),
    type: document.getElementById("type").value,
    email: document.getElementById("email").value.trim(),
    note: document.getElementById("note").value.trim()
  };

  fetch("/api/register-full", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(member)
  })
  .then(res => res.json())
  .then(data => {
    alert(data.success ? "✅ สมัครสมาชิกเรียบร้อย" : data.error);
    if (data.success) window.location.href = "/";
  });
}
