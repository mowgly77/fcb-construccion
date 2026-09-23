import { useState, useEffect } from 'react';
import { services, WA_BASE } from '../data/services.js';
import { DEFAULT_PROJECTS, loadExtraProjects, saveExtraProjects, driveUrlToImg } from '../data/projects.js';

const ADMIN_PASSWORD = 'FCB2024*';

const EMPTY_FORM = {
  titulo: '',
  descripcion: '',
  categoria: '',
  servicios: [],
  img: '',
  ubicacion: '',
  año: new Date().getFullYear(),
};

function generateId() {
  return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

export default function Admin() {
  const [auth, setAuth] = useState(() => sessionStorage.getItem('fcb_admin') === '1');
  const [pwInput, setPwInput] = useState('');
  const [pwError, setPwError] = useState('');

  const [extras, setExtras] = useState(() => loadExtraProjects());
  const [editing, setEditing] = useState(null); // null = none, 'new' = new form, id = edit
  const [form, setForm] = useState(EMPTY_FORM);
  const [filter, setFilter] = useState('all');
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState('proyectos'); // 'proyectos' | 'info'

  useEffect(() => {
    saveExtraProjects(extras);
  }, [extras]);

  function login(e) {
    e.preventDefault();
    if (pwInput === ADMIN_PASSWORD) {
      sessionStorage.setItem('fcb_admin', '1');
      setAuth(true);
    } else {
      setPwError('Contraseña incorrecta');
    }
  }

  function logout() {
    sessionStorage.removeItem('fcb_admin');
    setAuth(false);
  }

  function openNew() {
    setForm({ ...EMPTY_FORM, año: new Date().getFullYear() });
    setEditing('new');
  }

  function openEdit(proj) {
    setForm({ ...proj });
    setEditing(proj.id);
  }

  function cancelEdit() {
    setEditing(null);
    setForm(EMPTY_FORM);
  }

  function saveForm(e) {
    e.preventDefault();
    const imgFinal = driveUrlToImg(form.img.trim()) || form.img.trim();
    if (editing === 'new') {
      const nuevo = { ...form, img: imgFinal, id: generateId() };
      setExtras(prev => [...prev, nuevo]);
    } else {
      setExtras(prev => prev.map(p => p.id === editing ? { ...form, img: imgFinal } : p));
    }
    setEditing(null);
    setForm(EMPTY_FORM);
    flashSaved();
  }

  function deleteProject(id) {
    if (!window.confirm('¿Eliminar este proyecto?')) return;
    setExtras(prev => prev.filter(p => p.id !== id));
    flashSaved();
  }

  function flashSaved() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function toggleServicio(slug) {
    setForm(prev => ({
      ...prev,
      servicios: prev.servicios.includes(slug)
        ? prev.servicios.filter(s => s !== slug)
        : [...prev.servicios, slug],
    }));
  }

  const allProjects = [...DEFAULT_PROJECTS, ...extras];
  const visible = filter === 'all' ? allProjects : allProjects.filter(p => p.servicios?.includes(filter));

  if (!auth) {
    return (
      <div className="admin-login">
        <div className="admin-login-box">
          <div className="logo-mark" style={{ fontSize: '48px', marginBottom: '8px' }}>F<b>C</b>B</div>
          <div className="logo-sub" style={{ marginBottom: '32px' }}>Panel de administración</div>
          <form onSubmit={login}>
            <label className="admin-label">Contraseña</label>
            <input
              className="admin-input"
              type="password"
              placeholder="••••••••"
              value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(''); }}
              autoFocus
            />
            {pwError && <p className="admin-error">{pwError}</p>}
            <button className="btn btn-wa" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
              Entrar
            </button>
          </form>
          <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--gris)', textAlign: 'center' }}>
            Contraseña por defecto: <code style={{ color: 'var(--amarillo)' }}>FCB2024*</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-wrap">
      {/* ── Header admin ── */}
      <div className="admin-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="logo-mark" style={{ fontSize: '28px' }}>F<b>C</b>B</div>
          <span style={{ color: 'var(--gris)', fontSize: '14px' }}>Panel de Administración</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {saved && <span style={{ color: '#4ade80', fontSize: '13px', fontWeight: 600 }}>✓ Guardado</span>}
          <a href="/" className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }}>Ver sitio</a>
          <button className="btn" onClick={logout} style={{ padding: '8px 16px', fontSize: '13px', background: 'var(--negro-3)', color: 'var(--gris)', border: '1px solid var(--gris-linea)' }}>
            Salir
          </button>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="admin-tabs">
        <button className={`admin-tab${tab === 'proyectos' ? ' active' : ''}`} onClick={() => setTab('proyectos')}>
          Proyectos ({allProjects.length})
        </button>
        <button className={`admin-tab${tab === 'info' ? ' active' : ''}`} onClick={() => setTab('info')}>
          Información
        </button>
      </div>

      {/* ══ TAB PROYECTOS ══ */}
      {tab === 'proyectos' && (
        <div className="admin-content">
          {/* Controls */}
          <div className="admin-controls">
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <label className="admin-label" style={{ margin: 0 }}>Filtrar por servicio:</label>
              <select className="admin-select" value={filter} onChange={e => setFilter(e.target.value)}>
                <option value="all">Todos ({allProjects.length})</option>
                {services.map(s => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({allProjects.filter(p => p.servicios?.includes(s.slug)).length})
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-wa" onClick={openNew}>+ Agregar proyecto</button>
          </div>

          {/* Form modal */}
          {editing !== null && (
            <div className="admin-modal-bg" onClick={e => { if (e.target === e.currentTarget) cancelEdit(); }}>
              <div className="admin-modal">
                <div className="admin-modal-head">
                  <h3>{editing === 'new' ? 'Nuevo proyecto' : 'Editar proyecto'}</h3>
                  <button onClick={cancelEdit} style={{ background: 'none', border: 'none', color: 'var(--gris)', fontSize: '22px', cursor: 'pointer', lineHeight: 1 }}>✕</button>
                </div>
                <form onSubmit={saveForm} className="admin-form">
                  <div className="admin-form-row">
                    <div>
                      <label className="admin-label">Título *</label>
                      <input className="admin-input" required value={form.titulo} onChange={e => setForm(p => ({ ...p, titulo: e.target.value }))} placeholder="Ej. Impermeabilización de losa 80m²" />
                    </div>
                    <div>
                      <label className="admin-label">Categoría *</label>
                      <input className="admin-input" required value={form.categoria} onChange={e => setForm(p => ({ ...p, categoria: e.target.value }))} placeholder="Ej. Impermeabilización" />
                    </div>
                  </div>

                  <div>
                    <label className="admin-label">Descripción</label>
                    <textarea className="admin-input" rows={3} value={form.descripcion} onChange={e => setForm(p => ({ ...p, descripcion: e.target.value }))} placeholder="Breve descripción del proyecto..." />
                  </div>

                  <div className="admin-form-row">
                    <div>
                      <label className="admin-label">Ubicación</label>
                      <input className="admin-input" value={form.ubicacion} onChange={e => setForm(p => ({ ...p, ubicacion: e.target.value }))} placeholder="Ej. Querétaro centro" />
                    </div>
                    <div>
                      <label className="admin-label">Año</label>
                      <input className="admin-input" type="number" min="2000" max="2099" value={form.año} onChange={e => setForm(p => ({ ...p, año: Number(e.target.value) }))} />
                    </div>
                  </div>

                  <div>
                    <label className="admin-label">URL de imagen *</label>
                    <input className="admin-input" required value={form.img} onChange={e => setForm(p => ({ ...p, img: e.target.value }))} placeholder="https://... o URL de Google Drive" />
                    <p style={{ fontSize: '12px', color: 'var(--gris)', marginTop: '6px' }}>
                      Pega el enlace de Google Drive (compartir → "Cualquier persona con el enlace") o cualquier URL de imagen.
                    </p>
                    {form.img && (
                      <img
                        src={driveUrlToImg(form.img)}
                        alt="Vista previa"
                        style={{ marginTop: '10px', maxHeight: '160px', borderRadius: '4px', objectFit: 'cover' }}
                        onError={e => { e.target.style.display = 'none'; }}
                      />
                    )}
                  </div>

                  <div>
                    <label className="admin-label">Servicios asociados *</label>
                    <p style={{ fontSize: '12px', color: 'var(--gris)', marginBottom: '10px' }}>Este proyecto aparecerá en las páginas de los servicios seleccionados.</p>
                    <div className="admin-checks">
                      {services.map(s => (
                        <label key={s.slug} className={`admin-check-label${form.servicios.includes(s.slug) ? ' checked' : ''}`}>
                          <input
                            type="checkbox"
                            checked={form.servicios.includes(s.slug)}
                            onChange={() => toggleServicio(s.slug)}
                          />
                          {s.name}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button type="button" className="btn" onClick={cancelEdit} style={{ background: 'var(--negro-3)', color: 'var(--gris)', border: '1px solid var(--gris-linea)' }}>
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn-wa">
                      {editing === 'new' ? 'Agregar proyecto' : 'Guardar cambios'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Grid de proyectos */}
          {visible.length === 0 ? (
            <div className="drive-empty">No hay proyectos para este servicio todavía.</div>
          ) : (
            <div className="admin-grid">
              {visible.map(p => {
                const isDefault = DEFAULT_PROJECTS.some(d => d.id === p.id);
                return (
                  <div key={p.id} className="admin-card">
                    <div className="admin-card-img">
                      <img src={p.img} alt={p.titulo} loading="lazy" />
                      {isDefault && <span className="admin-badge">Semilla</span>}
                    </div>
                    <div className="admin-card-body">
                      <b className="admin-card-title">{p.titulo}</b>
                      <p className="admin-card-cat">{p.categoria} · {p.ubicacion || 'Querétaro'} · {p.año}</p>
                      <div className="admin-card-tags">
                        {p.servicios?.map(s => {
                          const serv = services.find(sv => sv.slug === s);
                          return serv ? <span key={s} className="admin-tag">{serv.name}</span> : null;
                        })}
                      </div>
                      <div className="admin-card-actions">
                        {!isDefault && (
                          <>
                            <button className="admin-btn-sm" onClick={() => openEdit(p)}>Editar</button>
                            <button className="admin-btn-sm danger" onClick={() => deleteProject(p.id)}>Eliminar</button>
                          </>
                        )}
                        {isDefault && (
                          <span style={{ fontSize: '12px', color: 'var(--gris)' }}>Proyecto semilla (solo lectura)</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ══ TAB INFO ══ */}
      {tab === 'info' && (
        <div className="admin-content">
          <div className="admin-info-grid">
            <div className="admin-info-card">
              <h4>Total de proyectos</h4>
              <span className="admin-stat">{allProjects.length}</span>
              <p>{DEFAULT_PROJECTS.length} semilla + {extras.length} agregados</p>
            </div>
            <div className="admin-info-card">
              <h4>Servicios activos</h4>
              <span className="admin-stat">{services.length}</span>
              <p>Páginas de servicio publicadas</p>
            </div>
            <div className="admin-info-card">
              <h4>WhatsApp</h4>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amarillo)' }}>
                442 493 5756
              </a>
              <p>Número de contacto activo</p>
            </div>
          </div>

          <div className="admin-info-section">
            <h4>Cómo agregar fotos desde Google Drive</h4>
            <ol style={{ color: 'var(--gris)', fontSize: '14.5px', lineHeight: 2, paddingLeft: '20px' }}>
              <li>Sube la foto a la carpeta de Drive: <a href="https://drive.google.com/drive/folders/1di26QhQTJ587-DuF6vGKRPi59rBveCwQ" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amarillo)' }}>Abrir carpeta FCB</a></li>
              <li>Haz clic derecho en la imagen → <strong>"Compartir"</strong> → <strong>"Cualquier persona con el enlace puede ver"</strong></li>
              <li>Copia el enlace que genera Drive</li>
              <li>En "Agregar proyecto", pega ese enlace en el campo de imagen — el sistema lo convierte automáticamente</li>
            </ol>
          </div>

          <div className="admin-info-section">
            <h4>Nota importante sobre persistencia</h4>
            <p style={{ color: 'var(--gris)', fontSize: '14.5px', lineHeight: 1.75 }}>
              Los proyectos que agregas desde este panel se guardan en el almacenamiento local del navegador (localStorage).
              Permanecen mientras uses el mismo navegador y no limpies el caché.
              Para que los proyectos sean permanentes y se vean en todos los dispositivos,
              es necesario conectar una base de datos o API. Puedes pedirle esto al desarrollador.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
