import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowLeft, a as Radiation, c as Layers, d as Clock, f as ChartColumn, g as Atom, h as BookOpenText, i as Sparkles, l as Gamepad2, m as Brain, o as PenLine, p as CalendarDays, r as Spline, s as Lightbulb, t as Zap, u as Crosshair } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-c1AZDaPA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function shuffle(items) {
	const copy = [...items];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}
function normaliseAnswer(value) {
	return value.toLowerCase().trim().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ");
}
function answersMatch(user, accepted) {
	const options = Array.isArray(accepted) ? accepted : [accepted];
	const userNorm = normaliseAnswer(user);
	const singular = (word) => word.endsWith("s") ? word.slice(0, -1) : word;
	return options.some((opt) => {
		const answer = normaliseAnswer(opt);
		return userNorm === answer || singular(userNorm) === singular(answer);
	});
}
function BrandMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-9 shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "9",
				className: "fill-surface"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.75",
				y: "0.75",
				width: "30.5",
				height: "30.5",
				rx: "8.25",
				className: "fill-none stroke-border",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 22.5c3.2-6.4 5.1-9.6 8-13.5 2.9 3.9 4.8 7.1 8 13.5",
				className: "fill-none stroke-primary",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "12.2",
				r: "2.1",
				className: "fill-secondary"
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] text-sm font-semibold transition-[background-color,border-color,color,transform] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground border border-primary hover:bg-primary-hover",
			action: "bg-secondary text-secondary-foreground border border-secondary hover:bg-secondary-hover",
			outline: "bg-surface-hover text-foreground border border-border hover:border-primary hover:text-foreground",
			ghost: "bg-transparent text-muted border border-transparent hover:bg-surface-hover hover:text-foreground",
			danger: "bg-transparent text-danger border border-danger hover:bg-danger hover:text-danger-foreground"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6",
			full: "h-12 w-full px-5"
		}
	},
	defaultVariants: {
		variant: "outline",
		size: "default"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-[var(--shadow-border)] md:p-7", className),
		children
	});
}
function PanelTitle({ kicker, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6",
		children: [
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
				children: kicker
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-2xl font-bold tracking-tight text-foreground",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: description
			}) : null
		]
	});
}
var TOPIC_ORDER = [
	"energy",
	"heat",
	"sound",
	"emspectrum",
	"light",
	"electricity",
	"radioactivity",
	"physics",
	"chemistry",
	"reproduction",
	"body",
	"carbon"
];
var catNames = {
	energy: "Energy & Transformations",
	heat: "Heat Transfer & Insulation",
	sound: "Sound & Waves",
	electricity: "Electricity & Circuits",
	light: "Light: Reflection, Refraction & Colour",
	emspectrum: "Electromagnetic Spectrum",
	radioactivity: "Isotopes & Radioactivity",
	physics: "Physics: Mixed",
	reproduction: "Bio: Reproduction",
	chemistry: "Chem: Atomic Structure & Reactions",
	carbon: "Earth: Carbon Cycle",
	body: "Bio: Body Regulation"
};
var STATS_KEY = "year9-sciStats";
var QSTATS_KEY = "year9-sciQuestionStats";
var TT_KEY = "year9-sciTimetable";
function emptyStats() {
	return Object.fromEntries(TOPIC_ORDER.map((cat) => [cat, {
		c: 0,
		t: 0
	}]));
}
function readJson(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function loadStats() {
	const stored = readJson(STATS_KEY, {});
	const base = emptyStats();
	for (const cat of TOPIC_ORDER) if (stored[cat]) base[cat] = stored[cat];
	return base;
}
function loadQuestionStats() {
	return readJson(QSTATS_KEY, {});
}
function saveQuizResults(updates) {
	const stats = loadStats();
	const qStats = loadQuestionStats();
	for (const u of updates) {
		if (!stats[u.cat]) stats[u.cat] = {
			c: 0,
			t: 0
		};
		stats[u.cat].t += 1;
		if (u.correct) stats[u.cat].c += 1;
		if (!qStats[u.q]) qStats[u.q] = {
			c: 0,
			t: 0
		};
		qStats[u.q].t += 1;
		if (u.correct) qStats[u.q].c += 1;
	}
	localStorage.setItem(STATS_KEY, JSON.stringify(stats));
	localStorage.setItem(QSTATS_KEY, JSON.stringify(qStats));
}
function clearStats() {
	localStorage.removeItem(STATS_KEY);
	localStorage.removeItem(QSTATS_KEY);
}
function loadTimetable() {
	return readJson(TT_KEY, {});
}
function saveTimetable(events) {
	localStorage.setItem(TT_KEY, JSON.stringify(events));
}
var DAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
var HOURS = [
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22
];
function getMonday(date) {
	const d = new Date(date);
	const day = d.getDay();
	const diff = day === 0 ? -6 : 1 - day;
	d.setDate(d.getDate() + diff);
	d.setHours(0, 0, 0, 0);
	return d;
}
function dateKey(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function formatTime(hour, minute = 0) {
	const suffix = hour >= 12 ? "PM" : "AM";
	return `${(hour + 11) % 12 + 1}:${String(minute).padStart(2, "0")} ${suffix}`;
}
function CalendarPanel() {
	const [offset, setOffset] = (0, import_react.useState)(0);
	const [events, setEvents] = (0, import_react.useState)({});
	const [modal, setModal] = (0, import_react.useState)(null);
	const [range, setRange] = (0, import_react.useState)(7);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		type: "study",
		startHour: 8,
		startMinute: 0,
		endHour: 9,
		endMinute: 0
	});
	(0, import_react.useEffect)(() => {
		setEvents(loadTimetable());
	}, []);
	const monday = (0, import_react.useMemo)(() => {
		const m = getMonday(/* @__PURE__ */ new Date());
		m.setDate(m.getDate() + offset * 7);
		return m;
	}, [offset]);
	const weekLabel = `${monday.toLocaleDateString(void 0, {
		day: "numeric",
		month: "short"
	})} – ${new Date(monday.getTime() + 5184e5).toLocaleDateString(void 0, {
		day: "numeric",
		month: "short"
	})}`;
	const upcoming = (0, import_react.useMemo)(() => {
		const start = /* @__PURE__ */ new Date();
		start.setHours(0, 0, 0, 0);
		const end = new Date(start);
		end.setDate(end.getDate() + range);
		return Object.entries(events).map(([key, ev]) => ({
			...ev,
			key,
			d: /* @__PURE__ */ new Date(ev.date + "T00:00:00")
		})).filter((ev) => ev.d >= start && ev.d < end).sort((a, b) => a.d.getTime() - b.d.getTime() || a.startHour - b.startHour || a.startMinute - b.startMinute);
	}, [events, range]);
	function persist(next) {
		setEvents(next);
		saveTimetable(next);
	}
	function open(date, hour, editKey) {
		const existing = editKey ? events[editKey] : void 0;
		setForm({
			name: existing?.name ?? "",
			type: existing?.type ?? "study",
			startHour: existing ? existing.startHour : hour,
			startMinute: existing?.startMinute ?? 0,
			endHour: existing ? existing.endHour : Math.min(hour + 1, 22),
			endMinute: existing?.endMinute ?? 0
		});
		setModal({
			date,
			hour,
			editKey
		});
	}
	function save() {
		if (!modal) return;
		const name = form.name.trim();
		if (!name) return alert("Please enter an event name.");
		if (form.endHour * 60 + form.endMinute <= form.startHour * 60 + form.startMinute) return alert("The end time must be after the start time.");
		const key = modal.editKey || `${modal.date}-${Date.now()}`;
		persist({
			...events,
			[key]: {
				date: modal.date,
				name,
				type: form.type,
				startHour: form.startHour,
				startMinute: form.startMinute,
				endHour: form.endHour,
				endMinute: form.endMinute
			}
		});
		setModal(null);
	}
	function remove(key) {
		const next = { ...events };
		delete next[key];
		persist(next);
	}
	const minutesPerDay = 840;
	const trackHeight = 720;
	const pxPerMinute = trackHeight / minutesPerDay;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "p-4 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setOffset((o) => o - 1),
						children: "Previous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "flex-1 text-center text-lg font-bold",
						children: weekLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => setOffset((o) => o + 1),
						children: "Next"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOffset(0),
					children: "This week"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Click a day column to add a class, study block or assessment. Everything saves on this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-[var(--radius-md)] border border-border bg-bg p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: "Upcoming"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							upcoming.length,
							" event",
							upcoming.length === 1 ? "" : "s"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "h-10 rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm",
						value: range,
						onChange: (e) => setRange(Number(e.target.value)),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 7,
								children: "Next 7 days"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 14,
								children: "Next 2 weeks"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: 30,
								children: "Next month"
							})
						]
					})]
				}), upcoming.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Nothing scheduled in this range."
				}) : upcoming.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						const d = /* @__PURE__ */ new Date(ev.date + "T00:00:00");
						const diff = Math.round((d.getTime() - monday.getTime()) / 864e5);
						setOffset((o) => o + Math.round(diff / 7));
					},
					className: "mb-2 flex w-full items-center justify-between rounded-[var(--radius-sm)] border-l-4 border-primary bg-surface-hover px-3 py-2 text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: ev.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [
							ev.d.toLocaleDateString(void 0, {
								weekday: "short",
								day: "numeric",
								month: "short"
							}),
							" ·",
							" ",
							formatTime(ev.startHour, ev.startMinute)
						]
					})]
				}, ev.key))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-[var(--radius-md)] border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-[900px]",
					style: { height: 764 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[72px_repeat(7,minmax(0,1fr))]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sticky top-0 z-10 border-b border-r border-border bg-surface px-2 py-3 text-center text-sm font-bold",
								children: "Time"
							}), DAYS.map((day, idx) => {
								const d = new Date(monday);
								d.setDate(d.getDate() + idx);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sticky top-0 z-10 border-b border-r border-border bg-surface px-2 py-2 text-center text-sm font-bold",
									children: [day, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs font-normal text-muted",
										children: d.toLocaleDateString(void 0, {
											day: "numeric",
											month: "short"
										})
									})]
								}, day);
							})]
						}),
						HOURS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 w-[72px] border-r border-t border-border bg-surface pr-2 pt-1 text-right text-xs text-muted",
							style: {
								top: 44 + (h - 8) * 60 * pxPerMinute,
								height: 60
							},
							children: formatTime(h)
						}, h)),
						DAYS.map((day, dIdx) => {
							const d = new Date(monday);
							d.setDate(d.getDate() + dIdx);
							const date = dateKey(d);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute cursor-pointer border-l border-t border-border hover:bg-primary/5",
								style: {
									top: 44,
									left: `calc(72px + ((100% - 72px) / 7) * ${dIdx})`,
									width: "calc((100% - 72px) / 7)",
									height: trackHeight,
									backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 59px, var(--color-border) 60px)"
								},
								onClick: (e) => {
									const rect = e.currentTarget.getBoundingClientRect();
									const y = Math.max(0, e.clientY - rect.top);
									const clickedHour = Math.max(8, Math.min(21, 8 + Math.floor(y / pxPerMinute / 60)));
									open(date, clickedHour);
								}
							}, day);
						}),
						Object.entries(events).map(([key, ev]) => {
							const d = /* @__PURE__ */ new Date(ev.date + "T00:00:00");
							const diff = Math.round((d.getTime() - monday.getTime()) / 864e5);
							if (diff < 0 || diff > 6) return null;
							const startMinutes = Math.max(0, (ev.startHour - 8) * 60 + ev.startMinute);
							const endMinutes = Math.min(minutesPerDay, (ev.endHour - 8) * 60 + ev.endMinute);
							const duration = Math.max(15, endMinutes - startMinutes);
							const color = ev.type === "exam" ? "bg-danger text-white" : ev.type === "study" ? "bg-secondary text-white" : "bg-primary text-primary-foreground";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `absolute z-10 overflow-hidden rounded-md px-2 py-1 text-xs font-bold ${color}`,
								style: {
									left: `calc(72px + ((100% - 72px) / 7) * ${diff} + 4px)`,
									width: "calc((100% - 72px) / 7 - 8px)",
									top: 44 + startMinutes * pxPerMinute,
									height: Math.max(24, duration * pxPerMinute - 3)
								},
								onClick: (e) => {
									e.stopPropagation();
									open(ev.date, ev.startHour, key);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate pr-5",
									children: ev.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "absolute right-1 top-1 rounded bg-black/20 px-1 text-[10px]",
									onClick: (e) => {
										e.stopPropagation();
										remove(key);
									},
									children: "X"
								})]
							}, key);
						})
					]
				})
			}),
			modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-[var(--radius-lg)] border border-border bg-surface p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: modal.editKey ? "Edit event" : "Add event"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-xs text-muted",
							children: ["Event name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted",
									children: ["Start hour", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 8,
										max: 22,
										className: "mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
										value: form.startHour,
										onChange: (e) => setForm({
											...form,
											startHour: Number(e.target.value)
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted",
									children: ["Start minute", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
										value: form.startMinute,
										onChange: (e) => setForm({
											...form,
											startMinute: Number(e.target.value)
										}),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 0,
												children: "00"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 15,
												children: "15"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 30,
												children: "30"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 45,
												children: "45"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted",
									children: ["End hour", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 8,
										max: 22,
										className: "mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
										value: form.endHour,
										onChange: (e) => setForm({
											...form,
											endHour: Number(e.target.value)
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-xs text-muted",
									children: ["End minute", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
										value: form.endMinute,
										onChange: (e) => setForm({
											...form,
											endMinute: Number(e.target.value)
										}),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 0,
												children: "00"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 15,
												children: "15"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 30,
												children: "30"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: 45,
												children: "45"
											})
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-xs text-muted",
							children: ["Type", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
								value: form.type,
								onChange: (e) => setForm({
									...form,
									type: e.target.value
								}),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "class",
										children: "School class (blue)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "study",
										children: "Study block (green)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "exam",
										children: "Assessment / exam (red)"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "action",
								className: "flex-1",
								onClick: save,
								children: "Save"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "flex-1",
								onClick: () => setModal(null),
								children: "Cancel"
							})]
						})
					]
				})
			})
		]
	});
}
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeItem() {
	const kind = rand(0, 3);
	if (kind === 0) {
		const m = rand(2, 12);
		const h = rand(1, 8);
		return {
			q: `A ${m} kg mass is lifted ${h} m. g = 10 N/kg. What is the GPE gained?`,
			a: m * 10 * h,
			unit: "J",
			hint: "Ep = mgh"
		};
	}
	if (kind === 1) {
		const m = rand(2, 10);
		const v = rand(2, 8);
		return {
			q: `A ${m} kg object moves at ${v} m/s. What is its kinetic energy?`,
			a: .5 * m * v * v,
			unit: "J",
			hint: "Ek = ½mv²"
		};
	}
	if (kind === 2) {
		const f = rand(5, 20) * 10;
		const s = rand(2, 12);
		return {
			q: `A force of ${f} N moves an object ${s} m in the direction of the force. How much work is done?`,
			a: f * s,
			unit: "J",
			hint: "W = F × s"
		};
	}
	const input = rand(2, 10) * 50;
	const useful = rand(1, 8) * 20;
	const u = Math.min(useful, input);
	return {
		q: `A device takes in ${input} J and usefully transfers ${u} J. What is the efficiency as a percentage?`,
		a: u / input * 100,
		unit: "%",
		hint: "efficiency = useful ÷ input × 100"
	};
}
function closeEnough(user, answer) {
	const n = Number(user);
	if (!Number.isFinite(n)) return false;
	return Math.abs(n - answer) < .51 || Math.abs(n - answer) / Math.max(1, Math.abs(answer)) < .02;
}
function FormulaBlitz() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [i, setI] = (0, import_react.useState)(0);
	const [typed, setTyped] = (0, import_react.useState)("");
	const [score, setScore] = (0, import_react.useState)(0);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const current = items[i];
	const finished = items.length > 0 && i >= items.length;
	function start() {
		setItems(Array.from({ length: 8 }, () => makeItem()));
		setI(0);
		setTyped("");
		setScore(0);
		setFeedback(null);
	}
	function submit() {
		if (!current || feedback) return;
		const ok = closeEnough(typed, current.a);
		setFeedback(ok ? "ok" : "no");
		if (ok) setScore((s) => s + 1);
		saveQuizResults([{
			cat: "energy",
			q: current.q,
			correct: ok
		}]);
	}
	function next() {
		setI((n) => n + 1);
		setTyped("");
		setFeedback(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Eight quick calculations from the energy pack. Units are given — type the number only."
	}), items.length === 0 || finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [finished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 text-sm",
			children: [
				"Score ",
				score,
				" / ",
				items.length,
				". ",
				score >= 7 ? "A-range accuracy." : "Redo until the formulas feel automatic."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "action",
			onClick: start,
			children: "Start formula blitz"
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-primary",
				children: [
					i + 1,
					" / ",
					items.length,
					" · ",
					current.hint
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-lg font-semibold",
				children: current.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "h-11 w-40 rounded-[var(--radius-md)] border border-border bg-bg px-3 font-mono text-sm",
						value: typed,
						inputMode: "decimal",
						placeholder: "Number",
						onChange: (e) => setTyped(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") feedback ? next() : submit();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "self-center text-sm text-muted",
						children: current.unit
					}),
					!feedback ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "action",
						onClick: submit,
						children: "Check"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "action",
						onClick: next,
						children: "Next"
					})
				]
			}),
			feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-sm font-semibold", feedback === "ok" ? "text-success" : "text-danger"),
				children: feedback === "ok" ? "Correct." : `Answer: ${current.a} ${current.unit}`
			})
		]
	})] });
}
var MATCH_SETS = [
	{
		id: "energy",
		label: "Energy",
		pairs: [
			{
				term: "Kinetic energy",
				def: "Energy of a moving object, Ek = ½mv²"
			},
			{
				term: "GPE",
				def: "Stored energy due to height, Ep = mgh"
			},
			{
				term: "Work",
				def: "Energy transferred when a force moves an object, W = Fs"
			},
			{
				term: "Efficiency",
				def: "Useful energy out ÷ total energy in × 100%"
			},
			{
				term: "Sankey diagram",
				def: "Arrow diagram where width shows energy amount"
			},
			{
				term: "Conservation of energy",
				def: "Energy cannot be created or destroyed, only transferred"
			}
		]
	},
	{
		id: "light",
		label: "Light",
		pairs: [
			{
				term: "Law of reflection",
				def: "Angle of incidence equals angle of reflection"
			},
			{
				term: "Normal",
				def: "A line drawn at 90° to a surface at the point of incidence"
			},
			{
				term: "Refraction",
				def: "Bending of light when it changes speed between media"
			},
			{
				term: "TIR",
				def: "All light reflects inside a denser medium when i ≥ critical angle"
			},
			{
				term: "Dispersion",
				def: "White light splitting into ROYGBIV because colours slow by different amounts"
			},
			{
				term: "Additive primaries",
				def: "Red, green and blue light mix to make white"
			}
		]
	},
	{
		id: "emspectrum",
		label: "EM spectrum",
		pairs: [
			{
				term: "Radio waves",
				def: "Longest wavelength EM waves; radio and TV"
			},
			{
				term: "Microwaves",
				def: "Heat food by vibrating water molecules; also radar"
			},
			{
				term: "Infrared",
				def: "Heat radiation; remotes and thermal cameras"
			},
			{
				term: "Ultraviolet",
				def: "Can cause sunburn and skin cancer; also makes vitamin D"
			},
			{
				term: "X-rays",
				def: "Pass through soft tissue; used to image bones"
			},
			{
				term: "Gamma rays",
				def: "Highest energy EM waves; from radioactive nuclei"
			}
		]
	},
	{
		id: "electricity",
		label: "Electricity",
		pairs: [
			{
				term: "Current",
				def: "Flow of charge, measured in amps"
			},
			{
				term: "Voltage",
				def: "Energy per coulomb / push on charges, measured in volts"
			},
			{
				term: "Resistance",
				def: "Opposition to current, measured in ohms"
			},
			{
				term: "Series circuit",
				def: "One path; current the same everywhere; voltage shared"
			},
			{
				term: "Parallel circuit",
				def: "Branches; voltage the same across each; current splits"
			},
			{
				term: "Ammeter",
				def: "Measures current and is placed in series"
			}
		]
	},
	{
		id: "radioactivity",
		label: "Radioactivity",
		pairs: [
			{
				term: "Isotope",
				def: "Same number of protons, different number of neutrons"
			},
			{
				term: "Alpha particle",
				def: "Helium nucleus; stopped by paper; highly ionising"
			},
			{
				term: "Beta particle",
				def: "Fast electron; stopped by aluminium"
			},
			{
				term: "Gamma ray",
				def: "EM wave; most penetrating; needs thick lead or concrete"
			},
			{
				term: "Half-life",
				def: "Time for half the radioactive nuclei in a sample to decay"
			},
			{
				term: "Ionising radiation",
				def: "Radiation that can knock electrons off atoms and damage DNA"
			}
		]
	}
];
function MatchGame() {
	const [setId, setSetId] = (0, import_react.useState)(MATCH_SETS[0].id);
	const [left, setLeft] = (0, import_react.useState)([]);
	const [right, setRight] = (0, import_react.useState)([]);
	const [pick, setPick] = (0, import_react.useState)(null);
	const [matched, setMatched] = (0, import_react.useState)([]);
	const [wrong, setWrong] = (0, import_react.useState)([]);
	const [misses, setMisses] = (0, import_react.useState)(0);
	const pack = MATCH_SETS.find((s) => s.id === setId);
	const done = left.length > 0 && matched.length === left.length;
	function start() {
		const cards = pack.pairs.flatMap((p, i) => [{
			id: `t-${i}`,
			text: p.term,
			pair: String(i),
			side: "term"
		}, {
			id: `d-${i}`,
			text: p.def,
			pair: String(i),
			side: "def"
		}]);
		setLeft(shuffle(cards.filter((c) => c.side === "term")));
		setRight(shuffle(cards.filter((c) => c.side === "def")));
		setPick(null);
		setMatched([]);
		setWrong([]);
		setMisses(0);
	}
	function tap(card) {
		if (matched.includes(card.id) || done) return;
		if (!pick) {
			setPick(card);
			return;
		}
		if (pick.id === card.id) {
			setPick(null);
			return;
		}
		if (pick.pair === card.pair && pick.side !== card.side) {
			setMatched((m) => [
				...m,
				pick.id,
				card.id
			]);
			setPick(null);
			setWrong([]);
		} else {
			setMisses((n) => n + 1);
			setWrong([pick.id, card.id]);
			setPick(null);
			window.setTimeout(() => setWrong([]), 450);
		}
	}
	function save() {
		if (!done) return;
		const cat = pack.id === "mix" ? "physics" : pack.id;
		saveQuizResults(pack.pairs.map((p) => ({
			cat,
			q: `Match: ${p.term}`,
			correct: true
		})));
	}
	const remaining = (0, import_react.useMemo)(() => left.filter((c) => !matched.includes(c.id)).length, [left, matched]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "h-11 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
			value: setId,
			onChange: (e) => setSetId(e.target.value),
			children: MATCH_SETS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: s.id,
				children: s.label
			}, s.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "action",
			onClick: start,
			children: "Deal pairs"
		})]
	}), left.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 text-sm text-muted",
		children: "Deal a set, then tap one term and its definition."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				remaining,
				" pairs left · ",
				misses,
				" misses"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
				cards: left,
				pick,
				matched,
				wrong,
				onTap: tap
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
				cards: right,
				pick,
				matched,
				wrong,
				onTap: tap
			})]
		}),
		done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-[var(--radius-sm)] border border-success/40 bg-success/10 px-4 py-3 text-sm",
			children: [
				"Set complete with ",
				misses,
				" misses.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "action",
					size: "sm",
					className: "ml-3",
					onClick: save,
					children: "Save as revision"
				})
			]
		})
	] })] });
}
function Column({ cards, pick, matched, wrong, onTap }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2",
		children: cards.map((c) => {
			const isOn = pick?.id === c.id;
			const isMatch = matched.includes(c.id);
			const isWrong = wrong.includes(c.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: isMatch,
				onClick: () => onTap(c),
				className: cn("min-h-12 rounded-[var(--radius-sm)] border px-3 py-3 text-left text-sm font-semibold", isMatch && "border-success bg-success/15 text-success", isWrong && "border-danger bg-danger/15", isOn && "border-primary bg-primary/15", !isOn && !isMatch && !isWrong && "border-border bg-bg hover:border-primary"),
				children: c.text
			}, c.id);
		})
	});
}
var BANK = [
	{
		q: "Stopped by a sheet of paper or skin",
		a: "Alpha"
	},
	{
		q: "Helium nucleus (2 protons + 2 neutrons)",
		a: "Alpha"
	},
	{
		q: "Most ionising of the three",
		a: "Alpha"
	},
	{
		q: "Deflected towards a negative plate (positive charge)",
		a: "Alpha"
	},
	{
		q: "Fast electron emitted from the nucleus",
		a: "Beta"
	},
	{
		q: "Stopped by a few millimetres of aluminium",
		a: "Beta"
	},
	{
		q: "Deflected towards a positive plate",
		a: "Beta"
	},
	{
		q: "A neutron changing into a proton produces this",
		a: "Beta"
	},
	{
		q: "Electromagnetic wave from the nucleus",
		a: "Gamma"
	},
	{
		q: "Most penetrating — needs thick lead or concrete",
		a: "Gamma"
	},
	{
		q: "No charge, so not deflected by electric fields",
		a: "Gamma"
	},
	{
		q: "Least ionising of the three",
		a: "Gamma"
	}
];
var OPTIONS = [
	"Alpha",
	"Beta",
	"Gamma"
];
function RadiationRush() {
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [i, setI] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const current = queue[i];
	const finished = queue.length > 0 && i >= queue.length;
	function start() {
		setQueue(shuffle(BANK));
		setI(0);
		setScore(0);
		setPicked(null);
	}
	function choose(opt) {
		if (!current || picked) return;
		const ok = opt === current.a;
		setPicked(opt);
		if (ok) setScore((s) => s + 1);
		saveQuizResults([{
			cat: "radioactivity",
			q: current.q,
			correct: ok
		}]);
		window.setTimeout(() => {
			setI((n) => n + 1);
			setPicked(null);
		}, 550);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Twelve properties. Tap alpha, beta or gamma as fast as you can without guessing."
	}), queue.length === 0 || finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [finished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 text-sm",
			children: [
				score,
				" / ",
				queue.length,
				". Aim for 11+ before the test."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "action",
			onClick: start,
			children: "Start radiation rush"
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-primary",
				children: [
					i + 1,
					" / ",
					queue.length,
					" · score ",
					score
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 min-h-16 text-lg font-semibold",
				children: current.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-3",
				children: OPTIONS.map((opt) => {
					let tone = "border-border bg-bg";
					if (picked) {
						if (opt === current.a) tone = "border-success bg-success text-success-foreground";
						else if (opt === picked) tone = "border-danger bg-danger text-danger-foreground";
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => choose(opt),
						className: cn("h-12 rounded-[var(--radius-sm)] border text-sm font-bold", tone),
						children: opt
					}, opt);
				})
			})
		]
	})] });
}
var ORDER = [
	"Radio",
	"Microwave",
	"Infrared",
	"Visible",
	"Ultraviolet",
	"X-ray",
	"Gamma"
];
function SpectrumSort() {
	const [items, setItems] = (0, import_react.useState)(() => shuffle([...ORDER]));
	const [checked, setChecked] = (0, import_react.useState)(false);
	const correct = items.every((v, i) => v === ORDER[i]);
	function move(i, dir) {
		if (checked) return;
		const j = i + dir;
		if (j < 0 || j >= items.length) return;
		const next = [...items];
		const a = next[i];
		next[i] = next[j];
		next[j] = a;
		setItems(next);
	}
	function mark() {
		setChecked(true);
		saveQuizResults([{
			cat: "emspectrum",
			q: "Order the EM spectrum from longest wavelength to shortest",
			correct
		}]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Longest wavelength at the top (radio), shortest at the bottom (gamma). Energy increases as you go down."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 grid gap-2",
			children: items.map((name, i) => {
				const right = checked && name === ORDER[i];
				const bad = checked && name !== ORDER[i];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("flex items-center gap-2 rounded-[var(--radius-sm)] border bg-bg px-3 py-2", right && "border-success", bad && "border-danger", !checked && "border-border"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-6 font-mono text-xs text-muted",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-sm font-semibold",
							children: name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: checked || i === 0,
							onClick: () => move(i, -1),
							children: "Up"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: checked || i === items.length - 1,
							onClick: () => move(i, 1),
							children: "Down"
						})
					]
				}, name);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: !checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "action",
				onClick: mark,
				children: "Check order"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("self-center text-sm font-semibold", correct ? "text-success" : "text-danger"),
				children: correct ? "Perfect — that is the exam order." : "Not yet. Radio → microwave → IR → visible → UV → X-ray → gamma."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => {
					setItems(shuffle([...ORDER]));
					setChecked(false);
				},
				children: "Shuffle again"
			})] })
		})
	] });
}
var existingQuestions = [
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Heat is defined as energy transferred due to a difference in:",
		"options": [
			"Density",
			"Temperature",
			"Volume"
		],
		"a": "Temperature"
	},
	{
		"cat": "physics",
		"type": "text",
		"q": "What is the standard unit of measurement for energy?",
		"a": "joules"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Which method of heat transfer involves the movement of fluids (liquids/gases)?",
		"options": [
			"Conduction",
			"Convection",
			"Radiation"
		],
		"a": "Convection"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Which method of heat transfer can occur in a vacuum?",
		"options": [
			"Conduction",
			"Convection",
			"Radiation"
		],
		"a": "Radiation"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "According to the particle model, why are metals good conductors?",
		"options": [
			"They trap air",
			"Particles vibrate and pass energy quickly",
			"They absorb light"
		],
		"a": "Particles vibrate and pass energy quickly"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Why are plastics considered good insulators?",
		"options": [
			"They have free electrons",
			"Their particles restrict the flow of heat/vibrations",
			"They reflect radiation"
		],
		"a": "Their particles restrict the flow of heat/vibrations"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Static electricity is _____ charge, while current electricity is _____ charge.",
		"options": ["moving; stationary", "stationary; moving"],
		"a": "stationary; moving"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "How should an ammeter and voltmeter be connected in a circuit?",
		"options": [
			"Both in series",
			"Ammeter in series, Voltmeter in parallel",
			"Ammeter in parallel, Voltmeter in series"
		],
		"a": "Ammeter in series, Voltmeter in parallel"
	},
	{
		"cat": "physics",
		"type": "text",
		"q": "According to the law of reflection, the angle of incidence equals the angle of _____.",
		"a": "reflection"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Why can light travel through space (a vacuum) but sound cannot?",
		"options": [
			"Light is an electromagnetic wave; sound needs particles",
			"Sound is too heavy",
			"Light waves are longitudinal"
		],
		"a": "Light is an electromagnetic wave; sound needs particles"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "In a longitudinal sound wave, the areas where particles are spread apart are called:",
		"options": [
			"Compressions",
			"Rarefactions",
			"Amplitudes"
		],
		"a": "Rarefactions"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Sound travels fastest through:",
		"options": [
			"Solids",
			"Liquids",
			"Gases"
		],
		"a": "Solids"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "A higher frequency sound wave creates a:",
		"options": [
			"Louder sound",
			"Higher pitch",
			"Lower pitch"
		],
		"a": "Higher pitch"
	},
	{
		"cat": "physics",
		"type": "text",
		"q": "To calculate frequency, use the formula f = v / λ. What does λ (lambda) stand for?",
		"a": "wavelength"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "What does a convex lens do to light rays?",
		"options": [
			"Diverges (spreads) them",
			"Converges (focuses) them",
			"Reflects them completely"
		],
		"a": "Converges (focuses) them"
	},
	{
		"cat": "reproduction",
		"type": "text",
		"q": "What term describes reproduction involving only one parent creating identical offspring?",
		"a": "asexual"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Runners and bulbs are examples of which asexual strategy?",
		"options": [
			"Binary fission",
			"Budding",
			"Vegetative propagation"
		],
		"a": "Vegetative propagation"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Asexual reproduction occurs predominantly in:",
		"options": [
			"Mammals",
			"Non-flowering plants, protists, bacteria",
			"Reptiles"
		],
		"a": "Non-flowering plants, protists, bacteria"
	},
	{
		"cat": "reproduction",
		"type": "text",
		"q": "In sexual reproduction, what are the sex cells (sperm and egg) scientifically called?",
		"a": "gametes"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Sexual reproduction creates offspring with what percentage of genetic info from each parent?",
		"options": [
			"100%",
			"75%",
			"50%"
		],
		"a": "50%"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Fertilisation can occur internally or externally. This adaptation often depends on the organism's:",
		"options": [
			"Diet",
			"Environment/Habitat",
			"Age"
		],
		"a": "Environment/Habitat"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Compared to asexual reproduction, sexual reproduction is:",
		"options": ["Faster but less genetic variation", "Slower but creates a greater rate of variation"],
		"a": "Slower but creates a greater rate of variation"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What is the basic unit of matter?",
		"a": "atom"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which subatomic particles are found in the nucleus?",
		"options": [
			"Protons and Electrons",
			"Protons and Neutrons",
			"Neutrons and Electrons"
		],
		"a": "Protons and Neutrons"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "The atomic number of an element is exactly equal to its number of:",
		"options": [
			"Neutrons",
			"Protons",
			"Valence electrons"
		],
		"a": "Protons"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "How do you calculate the number of neutrons?",
		"options": [
			"Mass number + Atomic number",
			"Mass number - Atomic number",
			"It equals the atomic number"
		],
		"a": "Mass number - Atomic number"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "Atoms are electrically neutral because they have equal numbers of protons and _____.",
		"a": "electrons"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "On the periodic table, rows are called _____ and columns are called _____.",
		"options": [
			"Groups; Periods",
			"Periods; Groups",
			"Metals; Non-metals"
		],
		"a": "Periods; Groups"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Elements in the same group (column) have:",
		"options": [
			"The same mass",
			"Similar chemical properties",
			"The same number of protons"
		],
		"a": "Similar chemical properties"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What is the correct electron configuration for Calcium (Atomic No. 20)?",
		"options": [
			"2, 8, 10",
			"2, 8, 8, 2",
			"2, 18"
		],
		"a": "2, 8, 8, 2"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What are the electrons in the outermost shell called?",
		"a": "valence"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "When metals lose electrons, they form positive ions called:",
		"options": [
			"Anions",
			"Cations",
			"Isotopes"
		],
		"a": "Cations"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "In the equation 2Mg + O2 → 2MgO, what are the reactants?",
		"options": [
			"2MgO",
			"Mg and O2",
			"Only Mg"
		],
		"a": "Mg and O2"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "The state symbol (aq) means:",
		"options": [
			"Solid",
			"Liquid",
			"Aqueous (dissolved in water)"
		],
		"a": "Aqueous (dissolved in water)"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "When balancing a chemical equation, you can only change the:",
		"options": [
			"Coefficients (large numbers in front)",
			"Subscripts (small numbers)",
			"Formulas"
		],
		"a": "Coefficients (large numbers in front)"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Reactions that absorb energy from the surroundings are:",
		"options": [
			"Exothermic",
			"Endothermic",
			"Neutral"
		],
		"a": "Endothermic"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "The Law of Conservation of Mass states that atoms are:",
		"options": [
			"Created during reactions",
			"Rearranged, not created or destroyed",
			"Destroyed when burned"
		],
		"a": "Rearranged, not created or destroyed"
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "Carbon continually moves through the atmosphere, hydrosphere, lithosphere, and _____.",
		"a": "biosphere"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Photosynthesis and cellular respiration are linked because:",
		"options": [
			"They both release oxygen",
			"The products of one are the reactants of the other",
			"They both happen in the dark"
		],
		"a": "The products of one are the reactants of the other"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is the word equation for photosynthesis?",
		"options": ["glucose + oxygen → carbon dioxide + water", "carbon dioxide + water → glucose + oxygen"],
		"a": "carbon dioxide + water → glucose + oxygen"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Cellular respiration releases carbon dioxide back into the:",
		"options": [
			"Lithosphere",
			"Atmosphere",
			"Hydrosphere"
		],
		"a": "Atmosphere"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Dead organisms return carbon to the Earth via:",
		"options": [
			"Combustion",
			"Lithification and Decomposition",
			"Respiration"
		],
		"a": "Lithification and Decomposition"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which human activity is the primary cause of increasing atmospheric carbon dioxide?",
		"options": [
			"Planting trees",
			"Burning fossil fuels",
			"Building dams"
		],
		"a": "Burning fossil fuels"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "The Central Nervous System (CNS) consists of the:",
		"options": [
			"Brain and spinal cord",
			"All nerves in the limbs",
			"Heart and lungs"
		],
		"a": "Brain and spinal cord"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which part of a neuron receives incoming messages?",
		"options": [
			"Axon",
			"Myelin Sheath",
			"Dendrite"
		],
		"a": "Dendrite"
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What detects stimuli in the nervous system (e.g., light, heat, pressure)?",
		"a": "receptors"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "How does a message travel along a single neuron?",
		"options": [
			"As a chemical hormone",
			"As an electrical impulse",
			"Through the blood"
		],
		"a": "As an electrical impulse"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is the correct pathway for a stimulus-response model?",
		"options": ["Stimulus → Receptor → Control Centre → Effector → Response", "Receptor → Stimulus → Effector → Response"],
		"a": "Stimulus → Receptor → Control Centre → Effector → Response"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Compared to the nervous system, the endocrine system is:",
		"options": [
			"Faster and short-lasting",
			"Slower and longer-lasting",
			"Uses electrical impulses"
		],
		"a": "Slower and longer-lasting"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "How do hormones travel to their target cells?",
		"options": [
			"Through nerves",
			"Through the bloodstream",
			"Through digestion"
		],
		"a": "Through the bloodstream"
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What is the scientific term for the body maintaining a stable internal environment?",
		"a": "homeostasis"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "When body temperature rises, sweating cools you down. This is an example of a:",
		"options": [
			"Positive feedback loop",
			"Negative feedback loop",
			"Nervous breakdown"
		],
		"a": "Negative feedback loop"
	},
	{
		"cat": "energy",
		"type": "mcq",
		"q": "In the particle model, what happens to particles when a substance is heated?",
		"options": [
			"They usually gain kinetic energy and move or vibrate more",
			"They disappear",
			"They become a different element"
		],
		"a": "They usually gain kinetic energy and move or vibrate more",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "mcq",
		"q": "Which two broad types of energy were contrasted in the particle-model recap?",
		"options": [
			"Kinetic and potential",
			"Electrical and magnetic",
			"Light and sound"
		],
		"a": "Kinetic and potential",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "text",
		"q": "What is the name of the model that describes matter as made of tiny particles?",
		"a": "particle model",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "mcq",
		"q": "In the particle model, particles in a solid are best described as:",
		"options": [
			"Close together and vibrating in place",
			"Very far apart and moving freely",
			"Not moving at all"
		],
		"a": "Close together and vibrating in place",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "mcq",
		"q": "In the particle model, particles in a gas are generally:",
		"options": [
			"Far apart and able to move freely",
			"Locked into fixed positions",
			"Packed as tightly as in a solid"
		],
		"a": "Far apart and able to move freely",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "mcq",
		"q": "When a substance changes state, what is happening to its particles?",
		"options": [
			"Their arrangement and movement change",
			"The particles are destroyed",
			"The number of protons changes"
		],
		"a": "Their arrangement and movement change",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "text",
		"q": "What kind of energy is associated with particle motion?",
		"a": "kinetic energy",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "energy",
		"type": "mcq",
		"q": "A change in the movement of particles is linked most directly to a change in their:",
		"options": [
			"Kinetic energy",
			"Atomic number",
			"Colour"
		],
		"a": "Kinetic energy",
		"source": "Energy and Particle Model"
	},
	{
		"cat": "heat",
		"type": "text",
		"q": "What is temperature a measure of in the particle model?",
		"a": "average kinetic energy",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which unit is used to measure heat as energy?",
		"options": [
			"Joules",
			"Degrees Celsius",
			"Amps"
		],
		"a": "Joules",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Heat transfer occurs when there is a difference in:",
		"options": [
			"Temperature",
			"Colour",
			"Mass only"
		],
		"a": "Temperature",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Thermal energy transfers naturally from:",
		"options": [
			"Higher temperature to lower temperature",
			"Lower temperature to higher temperature",
			"Cold objects to hot objects only"
		],
		"a": "Higher temperature to lower temperature",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which heat-transfer method mainly involves particles vibrating in place and passing energy to neighbouring particles?",
		"options": [
			"Conduction",
			"Convection",
			"Radiation"
		],
		"a": "Conduction",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which heat-transfer method occurs in liquids and gases through the movement of the heated substance?",
		"options": [
			"Convection",
			"Conduction",
			"Reflection"
		],
		"a": "Convection",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which heat-transfer method can occur through a vacuum?",
		"options": [
			"Radiation",
			"Convection",
			"Conduction only"
		],
		"a": "Radiation",
		"source": "Heat Transfer: Radiation"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "During conduction, hotter particles transfer energy to cooler particles mainly through:",
		"options": [
			"Collisions",
			"Gravity",
			"Chemical reactions"
		],
		"a": "Collisions",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Why do metals conduct heat efficiently according to the supplied notes?",
		"options": [
			"Their outer electrons are free to move and can transfer kinetic energy",
			"They contain trapped air",
			"Their particles never vibrate"
		],
		"a": "Their outer electrons are free to move and can transfer kinetic energy",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which is identified in the supplied notes as a heat insulator?",
		"options": [
			"Plastic",
			"Copper",
			"Metal"
		],
		"a": "Plastic",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Why is trapped air useful in many insulators?",
		"options": [
			"Air is a poor conductor of heat",
			"Air is an excellent conductor of heat",
			"Air stops particles existing"
		],
		"a": "Air is a poor conductor of heat",
		"source": "Heat, Temperature and Conduction"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "In convection, warm fluid tends to rise because it becomes:",
		"options": [
			"Less dense",
			"More dense",
			"Solid"
		],
		"a": "Less dense",
		"source": "Heat Transfer: Convection"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "In a convection current, cooler, denser fluid tends to:",
		"options": [
			"Sink",
			"Rise",
			"Disappear"
		],
		"a": "Sink",
		"source": "Heat Transfer: Convection"
	},
	{
		"cat": "heat",
		"type": "text",
		"q": "What is the term for heat transfer by electromagnetic waves?",
		"a": "radiation",
		"source": "Heat Transfer: Radiation"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Infrared radiation is a type of:",
		"options": [
			"Electromagnetic wave",
			"Sound wave",
			"Water wave"
		],
		"a": "Electromagnetic wave",
		"source": "Heat Transfer: Radiation"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "According to the supplied radiation notes, dark surfaces are generally good at:",
		"options": [
			"Absorbing and emitting thermal radiation",
			"Only transmitting radiation",
			"Preventing all radiation"
		],
		"a": "Absorbing and emitting thermal radiation",
		"source": "Heat Transfer: Radiation"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "A shiny, reflective surface tends to:",
		"options": [
			"Reflect more infrared radiation",
			"Absorb all infrared radiation",
			"Turn infrared into sound"
		],
		"a": "Reflect more infrared radiation",
		"source": "Heat Transfer: Radiation"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which situation is the clearest example of radiation?",
		"options": [
			"Warming your hands near a campfire",
			"A metal spoon heating along its length",
			"Water circulating as it boils"
		],
		"a": "Warming your hands near a campfire",
		"source": "2026 Energy Transfer Feedback"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "A plastic handle on a metal cooking utensil is mainly used to:",
		"options": [
			"Reduce heat transfer to your hand",
			"Increase conduction to your hand",
			"Make the metal hotter"
		],
		"a": "Reduce heat transfer to your hand",
		"source": "2026 Energy Transfer Feedback"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "Which sequence correctly names the three main methods of heat transfer taught in the supplied material?",
		"options": [
			"Conduction, convection, radiation",
			"Reflection, refraction, diffraction",
			"Current, voltage, resistance"
		],
		"a": "Conduction, convection, radiation",
		"source": "Heat Transfer lessons"
	},
	{
		"cat": "heat",
		"type": "mcq",
		"q": "In the supplied insulation investigation, what was being investigated?",
		"options": [
			"How insulation affects heat transfer",
			"How sound travels through solids",
			"How voltage changes in parallel circuits"
		],
		"a": "How insulation affects heat transfer",
		"source": "Y9 Insulation Investigation 2026"
	},
	{
		"cat": "sound",
		"type": "text",
		"q": "What creates a sound wave according to the supplied notes?",
		"a": "vibration",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "Sound requires what to travel through?",
		"options": [
			"A medium",
			"A vacuum only",
			"No matter at all"
		],
		"a": "A medium",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "Sound is described in the supplied material as a transfer of kinetic energy via:",
		"options": [
			"Mechanical longitudinal waves",
			"Electromagnetic transverse waves",
			"Light rays"
		],
		"a": "Mechanical longitudinal waves",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "In a longitudinal sound wave, particles move:",
		"options": [
			"Backwards and forwards parallel to the direction of wave motion",
			"Only upwards",
			"At 90° to the wave direction"
		],
		"a": "Backwards and forwards parallel to the direction of wave motion",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "text",
		"q": "What are the compressed regions of a longitudinal sound wave called?",
		"a": "compressions",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "text",
		"q": "What are the spread-out regions of a longitudinal sound wave called?",
		"a": "rarefactions",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "Which property of a sound wave is linked to loudness?",
		"options": [
			"Amplitude",
			"Frequency",
			"Wavelength only"
		],
		"a": "Amplitude",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "A larger amplitude produces a sound that is generally:",
		"options": [
			"Louder",
			"Higher pitched",
			"Slower"
		],
		"a": "Louder",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "Which property of a sound wave is linked to pitch?",
		"options": [
			"Frequency",
			"Amplitude",
			"Density"
		],
		"a": "Frequency",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "A higher frequency produces a sound with a:",
		"options": [
			"Higher pitch",
			"Lower pitch",
			"Lower amplitude automatically"
		],
		"a": "Higher pitch",
		"source": "Introduction to Sound"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "Why does sound generally travel faster through a solid than through a gas?",
		"options": [
			"The particles in a solid are closer together, so vibrations are passed on more quickly",
			"Sound becomes electromagnetic in a solid",
			"Solids have no particles"
		],
		"a": "The particles in a solid are closer together, so vibrations are passed on more quickly",
		"source": "Sound and Particles worksheet"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "Which type of wave can travel through a vacuum?",
		"options": [
			"Electromagnetic radiation",
			"Sound",
			"Any mechanical wave"
		],
		"a": "Electromagnetic radiation",
		"source": "Introduction to Sound / Energy Transfer assessment"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "If a sound wave has the same frequency but a greater amplitude, it will sound:",
		"options": [
			"Louder but with the same pitch",
			"Higher pitched but equally loud",
			"Quieter and lower pitched"
		],
		"a": "Louder but with the same pitch",
		"source": "Sound and Particles worksheet"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "If a sound wave has the same amplitude but a greater frequency, it will sound:",
		"options": [
			"Higher pitched but with the same loudness",
			"Louder but the same pitch",
			"Quieter and lower pitched"
		],
		"a": "Higher pitched but with the same loudness",
		"source": "Sound and Particles worksheet"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "A sound with many vibrations passing a point each second has a high:",
		"options": [
			"Frequency",
			"Amplitude",
			"Density"
		],
		"a": "Frequency",
		"source": "Sound and Particles worksheet"
	},
	{
		"cat": "sound",
		"type": "mcq",
		"q": "What happens to a particle as a sound vibration is passed through a material?",
		"options": [
			"It vibrates and transfers the disturbance to neighbouring particles",
			"It becomes light",
			"It stops existing"
		],
		"a": "It vibrates and transfers the disturbance to neighbouring particles",
		"source": "Sound and Particles worksheet"
	},
	{
		"cat": "electricity",
		"type": "text",
		"q": "What is the flow of electrons around a connected circuit called?",
		"a": "electric current",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "text",
		"q": "What unit is used to measure current?",
		"a": "amps",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "text",
		"q": "What unit is used to measure voltage?",
		"a": "volts",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "Which device measures current?",
		"options": [
			"Ammeter",
			"Voltmeter",
			"Thermometer"
		],
		"a": "Ammeter",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "Which device measures voltage?",
		"options": [
			"Voltmeter",
			"Ammeter",
			"Barometer"
		],
		"a": "Voltmeter",
		"source": "Voltage in Series and Parallel circuits"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "How is a voltmeter connected when measuring the voltage across a component?",
		"options": [
			"In parallel, or across the component",
			"In series with the whole circuit only",
			"Outside the circuit"
		],
		"a": "In parallel, or across the component",
		"source": "Voltage in Series and Parallel circuits"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "In a series circuit, the current is:",
		"options": [
			"The same at any point in the circuit",
			"Always zero",
			"Different at every point"
		],
		"a": "The same at any point in the circuit",
		"source": "Voltage in Series and Parallel circuits"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "In a series circuit, the supply voltage is:",
		"options": [
			"Shared between the components",
			"The same across every component",
			"Removed completely"
		],
		"a": "Shared between the components",
		"source": "Voltage in Series and Parallel circuits"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "In a parallel circuit, the supplied voltage is described in the source as:",
		"options": [
			"The same over the components",
			"Always zero",
			"Shared to make every branch lower"
		],
		"a": "The same over the components",
		"source": "Voltage in Series and Parallel circuits"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "A series circuit has components connected in:",
		"options": [
			"One continuous loop",
			"Two completely separate circuits",
			"No complete path"
		],
		"a": "One continuous loop",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "A parallel circuit has:",
		"options": [
			"Two or more separate loops from the same power source",
			"Only one continuous path",
			"No branches"
		],
		"a": "Two or more separate loops from the same power source",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "Materials that allow electricity to pass through them are called:",
		"options": [
			"Conductors",
			"Insulators",
			"Reactants"
		],
		"a": "Conductors",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "Materials that do not allow electricity to pass through them easily are called:",
		"options": [
			"Insulators",
			"Conductors",
			"Electrolytes only"
		],
		"a": "Insulators",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "In the supplied notes, resistance is a measure of how much a material:",
		"options": [
			"Tries to stop electricity passing through it",
			"Produces sound",
			"Reflects light"
		],
		"a": "Tries to stop electricity passing through it",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "When a battery is added to a circuit, the supplied notes say the current will generally:",
		"options": [
			"Increase because there is a greater push on the electrons",
			"Disappear",
			"Always stay exactly zero"
		],
		"a": "Increase because there is a greater push on the electrons",
		"source": "Voltage in Series and Parallel circuits"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "Static electricity differs from current electricity because static charge is mainly:",
		"options": [
			"Stationary charge, while current electricity is moving charge",
			"Moving charge, while current is stationary",
			"Only found in batteries"
		],
		"a": "Stationary charge, while current electricity is moving charge",
		"source": "2026 Energy Transfer Feedback / existing Science material"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "Why do metals conduct electricity according to the supplied notes?",
		"options": [
			"They have outer electrons that are free to move",
			"Their protons leave the metal",
			"They have no electrons"
		],
		"a": "They have outer electrons that are free to move",
		"source": "Year 9 Electricity"
	},
	{
		"cat": "electricity",
		"type": "mcq",
		"q": "What type of circuit was used in the uploaded assessment as an example with two bulbs sharing a single loop?",
		"options": [
			"Series circuit",
			"Parallel circuit",
			"Open circuit"
		],
		"a": "Series circuit",
		"source": "2026 Energy Transfer Feedback"
	},
	{
		"cat": "light",
		"type": "text",
		"q": "What is the rule linking the angle of incidence and the angle of reflection?",
		"a": "they are equal",
		"source": "Reflection"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "The normal to a mirror is drawn at what angle to the surface?",
		"options": [
			"90°",
			"45°",
			"180°"
		],
		"a": "90°",
		"source": "Reflection"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "Which ray travels towards a reflective surface?",
		"options": [
			"Incident ray",
			"Reflected ray",
			"Refracted ray"
		],
		"a": "Incident ray",
		"source": "Reflection"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "Which ray travels away from a mirror after bouncing?",
		"options": [
			"Reflected ray",
			"Incident ray",
			"Normal"
		],
		"a": "Reflected ray",
		"source": "Reflection"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "A smooth, shiny surface tends to produce:",
		"options": [
			"Clear reflection",
			"Diffuse reflection",
			"No reflection"
		],
		"a": "Clear reflection",
		"source": "Reflection"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "A rough, dull surface tends to produce:",
		"options": [
			"Diffuse reflection",
			"Clear reflection only",
			"Refraction only"
		],
		"a": "Diffuse reflection",
		"source": "Reflection"
	},
	{
		"cat": "light",
		"type": "text",
		"q": "What is refraction?",
		"a": "bending of light",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "Why does light refract when entering a different material?",
		"options": [
			"Its speed changes",
			"Its colour always changes",
			"It stops travelling"
		],
		"a": "Its speed changes",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "When light enters a more dense medium, its speed:",
		"options": [
			"Decreases",
			"Increases",
			"Becomes zero"
		],
		"a": "Decreases",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "When light travels from water to air, it moves into a less dense medium, so its speed:",
		"options": [
			"Increases",
			"Decreases",
			"Stays at zero"
		],
		"a": "Increases",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "According to the supplied refraction lesson, light entering a more dense material such as glass bends:",
		"options": [
			"Towards the normal",
			"Away from the normal",
			"Into a sound wave"
		],
		"a": "Towards the normal",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "According to the supplied refraction lesson, light moving from glass to air bends:",
		"options": [
			"Away from the normal",
			"Towards the normal",
			"It does not bend"
		],
		"a": "Away from the normal",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "Why can a pencil in water appear bent?",
		"options": [
			"Light refracts as it travels from water into air",
			"The pencil physically bends at the surface",
			"The water removes part of the pencil"
		],
		"a": "Light refracts as it travels from water into air",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "In a refraction diagram, the normal is drawn:",
		"options": [
			"Perpendicular to the boundary surface",
			"Parallel to the boundary surface",
			"As a random curved line"
		],
		"a": "Perpendicular to the boundary surface",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "Which two angles were compared in the uploaded refraction investigation?",
		"options": [
			"Angles of incidence and refraction",
			"Angles of reflection and amplitude",
			"Angles of pitch and volume"
		],
		"a": "Angles of incidence and refraction",
		"source": "Refraction"
	},
	{
		"cat": "light",
		"type": "mcq",
		"q": "What causes the 'floating coin' or 'short legs in a pool' effect in the supplied lesson?",
		"options": [
			"Refraction changes the apparent position of the object",
			"Reflection makes the object disappear",
			"Sound travels through the water"
		],
		"a": "Refraction changes the apparent position of the object",
		"source": "Refraction"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Which of these energy-transfer processes uses electromagnetic waves rather than moving matter?",
		"options": [
			"Radiation",
			"Convection",
			"Conduction"
		],
		"a": "Radiation",
		"source": "Uploaded source pack"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "A sound wave with a greater amplitude is perceived as:",
		"options": [
			"Louder",
			"Higher pitched",
			"Slower"
		],
		"a": "Louder",
		"source": "Uploaded source pack"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Which instrument should be connected in parallel across a component to measure voltage?",
		"options": [
			"Voltmeter",
			"Ammeter",
			"Thermometer"
		],
		"a": "Voltmeter",
		"source": "Uploaded source pack"
	},
	{
		"cat": "physics",
		"type": "mcq",
		"q": "Which statement combines the supplied lessons correctly?",
		"options": [
			"Sound needs a medium, while electromagnetic radiation can travel through a vacuum",
			"Both sound and radiation always need a medium",
			"Neither sound nor radiation can travel through matter"
		],
		"a": "Sound needs a medium, while electromagnetic radiation can travel through a vacuum",
		"source": "Uploaded source pack"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is the main difference between sexual and asexual reproduction?",
		"options": [
			"Sexual reproduction involves one parent, asexual involves two.",
			"Sexual reproduction produces identical offspring, asexual produces variation.",
			"Sexual reproduction requires two gametes, asexual usually requires only one parent.",
			"Asexual reproduction only occurs in animals."
		],
		"a": "Sexual reproduction requires two gametes, asexual usually requires only one parent.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which of the following is an example of asexual reproduction?",
		"options": [
			"Fertilisation of an egg by a sperm.",
			"A starfish regenerating a lost arm.",
			"A flowering plant producing seeds.",
			"An embryo developing inside the mother."
		],
		"a": "A starfish regenerating a lost arm.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Binary fission is a type of asexual reproduction found in:",
		"options": [
			"Mammals",
			"Bacteria",
			"Flowering plants",
			"Birds"
		],
		"a": "Bacteria",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "In sexual reproduction, gametes are:",
		"options": [
			"Identical to the parent cells",
			"Haploid sex cells such as sperm and eggs",
			"Diploid body cells",
			"Produced only in bacteria"
		],
		"a": "Haploid sex cells such as sperm and eggs",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Fertilisation in frogs usually occurs:",
		"options": [
			"Internally, inside the female’s body",
			"Externally, in the water environment",
			"In the soil around the eggs",
			"In the pollen grains"
		],
		"a": "Externally, in the water environment",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "A key advantage of sexual reproduction is:",
		"options": [
			"It is faster and requires less energy.",
			"Offspring are genetically identical to the parent.",
			"It produces greater genetic variation in offspring.",
			"It only requires one parent."
		],
		"a": "It produces greater genetic variation in offspring.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which of the following is an organism that can use both sexual and asexual reproduction?",
		"options": [
			"Humans",
			"Bacteria",
			"Fungi",
			"Fish"
		],
		"a": "Fungi",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "The term “hermaphroditism” refers to:",
		"options": [
			"Organisms that reproduce by fragmentation.",
			"Organisms that produce both male and female gametes.",
			"Reproduction without fertilisation.",
			"External fertilisation in water."
		],
		"a": "Organisms that produce both male and female gametes.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which type of reproduction is generally faster?",
		"options": [
			"Sexual",
			"Asexual",
			"Both are equal",
			"Neither"
		],
		"a": "Asexual",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which reproductive strategy involves regenerating from broken pieces?",
		"options": [
			"Spore formation",
			"Fragmentation",
			"Budding",
			"Vegetative propagation"
		],
		"a": "Fragmentation",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which of the following is not an asexual reproductive method?",
		"options": [
			"Budding",
			"Fragmentation",
			"Parthenogenesis",
			"Fertilisation"
		],
		"a": "Fertilisation",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which group of organisms most commonly reproduces through spore formation?",
		"options": [
			"Fungi",
			"Mammals",
			"Birds",
			"Fish"
		],
		"a": "Fungi",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which is true about asexual reproduction?",
		"options": [
			"It requires fertilisation of gametes.",
			"It leads to genetic diversity.",
			"Offspring are genetically identical to the parent.",
			"It only occurs in animals."
		],
		"a": "Offspring are genetically identical to the parent.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which term describes animals that give birth to live young?",
		"options": [
			"Oviparous",
			"Viviparous",
			"Ovoviviparous",
			"Haploid"
		],
		"a": "Viviparous",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which statement about ovoviviparous animals is correct?",
		"options": [
			"They lay eggs in the environment.",
			"They carry eggs inside the body until they hatch.",
			"They reproduce only by asexual means.",
			"They do not use gametes for reproduction."
		],
		"a": "They carry eggs inside the body until they hatch.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which of the following best explains why internal fertilisation is common in land animals?",
		"options": [
			"It prevents dehydration of gametes.",
			"It ensures offspring are genetically identical.",
			"It is faster than external fertilisation.",
			"It avoids the need for sperm."
		],
		"a": "It prevents dehydration of gametes.",
		"source": "Year 9 Science Practice Test"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is a reproductive strategy?",
		"options": [
			"A method that only involves fertilisation",
			"A behaviour or method that helps a species produce or raise offspring",
			"The fusion of a sperm and ovum",
			"Only the production of offspring by asexual reproduction"
		],
		"a": "A behaviour or method that helps a species produce or raise offspring",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which is a benefit of sexual reproduction identified in the supplied reproduction materials?",
		"options": [
			"Produces genetically identical offspring",
			"Requires only one parent",
			"Increases genetic diversity",
			"Always produces offspring faster"
		],
		"a": "Increases genetic diversity",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which process is essential for sexual reproduction in plants according to the supplied quiz?",
		"options": [
			"Pollination",
			"Budding",
			"Spore formation",
			"Binary fission"
		],
		"a": "Pollination",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is a key advantage of asexual reproduction?",
		"options": [
			"Genetic variation",
			"Requires two parents",
			"Production of seeds",
			"Rapid population growth"
		],
		"a": "Rapid population growth",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is the term for the fusion of male and female gametes?",
		"options": [
			"Cloning",
			"Fertilisation",
			"Budding",
			"Regeneration"
		],
		"a": "Fertilisation",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "The male and female gametes in animals are called:",
		"options": [
			"Pollen and ovules",
			"Sperm and eggs",
			"Spores and seeds",
			"Buds and fragments"
		],
		"a": "Sperm and eggs",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "How does asexual reproduction contribute to the survival of single-celled organisms according to the supplied quiz?",
		"options": [
			"It requires minimal energy and resources",
			"It produces genetically diverse offspring",
			"It requires parents to exchange genetic material",
			"It involves complex mating behaviours"
		],
		"a": "It requires minimal energy and resources",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is vegetative propagation in plants?",
		"options": [
			"Reproduction through runners or other plant parts",
			"Reproduction from an unfertilised egg",
			"Reproduction by budding only",
			"Reproduction by binary fission"
		],
		"a": "Reproduction through runners or other plant parts",
		"source": "Reproduction MindMap Task / Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which reproductive strategy can increase genetic diversity in plants?",
		"options": [
			"Fragmentation",
			"Budding",
			"Cross-pollination",
			"Binary fission"
		],
		"a": "Cross-pollination",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What advantage does parthenogenesis provide to species living in harsh or isolated environments?",
		"options": [
			"Produces genetically diverse offspring",
			"The offspring are expected to live longer",
			"Speeds up the mutation rate",
			"Allows reproduction without a mate"
		],
		"a": "Allows reproduction without a mate",
		"source": "Year 9 Reproduction Quiz 2024"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is the chromosome condition of a human gamete according to the supplied recap?",
		"options": [
			"Haploid, with 23 chromosomes",
			"Diploid, with 46 chromosomes",
			"Haploid, with 46 chromosomes",
			"Diploid, with 23 chromosomes"
		],
		"a": "Haploid, with 23 chromosomes",
		"source": "0. Reproduction Recap"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What happens when sperm and egg fuse during fertilisation?",
		"options": [
			"They form a zygote",
			"They form a gamete",
			"They form a clone",
			"They form a chromosome"
		],
		"a": "They form a zygote",
		"source": "0. Reproduction Recap"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "What is the difference between internal and external fertilisation?",
		"options": [
			"Internal occurs inside the body; external occurs outside the body",
			"Internal uses no gametes; external uses gametes",
			"Internal is always asexual; external is always asexual",
			"Internal only occurs in plants; external only occurs in mammals"
		],
		"a": "Internal occurs inside the body; external occurs outside the body",
		"source": "0. Reproduction Recap"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which animal is given in the supplied recap as an example of a sequential hermaphrodite?",
		"options": [
			"Clown fish",
			"Earthworm",
			"Flatworm",
			"Strawberry"
		],
		"a": "Clown fish",
		"source": "0. Reproduction Recap"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which statement about parental care is given in the supplied reproductive strategies material?",
		"options": [
			"It is behaviour by a parent that increases offspring survival chances",
			"It only occurs in asexual reproduction",
			"It always means producing more offspring",
			"It prevents genetic variation"
		],
		"a": "It is behaviour by a parent that increases offspring survival chances",
		"source": "Reproductive Strategies"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Why can binary fission cause bacterial numbers to increase rapidly?",
		"options": [
			"One bacterium divides into two",
			"Two bacteria fuse into one",
			"Each bacterium produces a seed",
			"Bacteria require a mate before dividing"
		],
		"a": "One bacterium divides into two",
		"source": "Binary Fission in Milk Scenario"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "According to the binary fission milk scenario, under ideal conditions one bacterium can become two every:",
		"options": [
			"5 minutes",
			"20 minutes",
			"2 hours",
			"8 hours"
		],
		"a": "20 minutes",
		"source": "Binary Fission in Milk Scenario"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Why does the supplied milk investigation ask students to compare bacterial growth at room temperature and in a refrigerator?",
		"options": [
			"Temperature can affect the rate of bacterial division",
			"Cold temperatures turn bacteria into gametes",
			"Refrigeration causes bacteria to reproduce sexually",
			"Temperature changes bacterial chromosomes into eggs"
		],
		"a": "Temperature can affect the rate of bacterial division",
		"source": "Binary Fission in Milk Scenario"
	},
	{
		"cat": "reproduction",
		"type": "mcq",
		"q": "Which set contains the six asexual reproductive strategies listed in the supplied presentation task?",
		"options": [
			"Binary fission, budding, fragmentation, vegetative propagation, spore formation and parthenogenesis",
			"Pollination, fertilisation, meiosis, budding, cloning and mutation",
			"Internal fertilisation, external fertilisation, budding, spawning, meiosis and seeds",
			"Binary fission, sperm, eggs, zygote, embryo and chromosomes"
		],
		"a": "Binary fission, budding, fragmentation, vegetative propagation, spore formation and parthenogenesis",
		"source": "Asexual Reproductive Strategies Presentation Task"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which subatomic particle determines which element an atom is?",
		"options": [
			"Proton",
			"Neutron",
			"Electron",
			"Nucleus"
		],
		"a": "Proton"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Where are protons and neutrons found?",
		"options": [
			"In the nucleus",
			"In the electron cloud",
			"In the outer shell only",
			"Between atoms"
		],
		"a": "In the nucleus"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What charge does an electron have?",
		"options": [
			"Negative",
			"Positive",
			"Neutral",
			"Variable"
		],
		"a": "Negative"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What is the atomic number of an atom with 12 protons?",
		"options": [
			"6",
			"12",
			"24",
			"36"
		],
		"a": "12"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What is the mass number of an atom with 8 protons and 8 neutrons?",
		"options": [
			"8",
			"16",
			"64",
			"0"
		],
		"a": "16"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What is the total number of protons and neutrons in an atom called?",
		"a": "mass number"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "An atom has 11 protons and 10 electrons. What is its charge?",
		"options": [
			"1+",
			"1−",
			"Neutral",
			"10+"
		],
		"a": "1+"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What happens to an atom when it gains electrons?",
		"options": [
			"It becomes a negative ion",
			"It becomes a positive ion",
			"Its atomic number increases",
			"It becomes a neutron"
		],
		"a": "It becomes a negative ion"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "According to the supplied lessons, what electron arrangement is generally most stable?",
		"options": [
			"A full valence shell",
			"One electron in every shell",
			"No electrons",
			"An empty outer shell only"
		],
		"a": "A full valence shell"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which group of elements is described as having full valence shells and being very unreactive?",
		"options": [
			"Noble gases",
			"Alkali metals",
			"Halogens",
			"Transition metals"
		],
		"a": "Noble gases"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What do metals generally do to form ions?",
		"options": [
			"Lose electrons",
			"Gain electrons",
			"Gain protons",
			"Lose neutrons"
		],
		"a": "Lose electrons"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What do non-metals generally do to form ions?",
		"options": [
			"Gain electrons",
			"Lose electrons",
			"Gain protons",
			"Lose neutrons"
		],
		"a": "Gain electrons"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What holds positive and negative ions together in an ionic compound?",
		"options": [
			"Electrostatic attraction",
			"Gravity",
			"Sound waves",
			"Magnetic attraction"
		],
		"a": "Electrostatic attraction"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What happens to atoms during a chemical reaction?",
		"options": [
			"They are rearranged into new products",
			"They are destroyed",
			"New atoms are created from nothing",
			"Their protons disappear"
		],
		"a": "They are rearranged into new products"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What happens to chemical bonds during a chemical reaction?",
		"options": [
			"Some bonds are broken and new bonds form",
			"All bonds remain unchanged",
			"Only neutrons form bonds",
			"Bonds turn into protons"
		],
		"a": "Some bonds are broken and new bonds form"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What does the law of conservation of mass mean in a chemical reaction?",
		"options": [
			"The mass of reactants equals the mass of products",
			"Products always weigh more",
			"Reactants disappear",
			"Energy and mass are always equal"
		],
		"a": "The mass of reactants equals the mass of products"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Why must a chemical equation be balanced?",
		"options": [
			"The same number of each type of atom must occur on both sides",
			"To make the products heavier",
			"To increase the reaction temperature",
			"To change the elements into new elements"
		],
		"a": "The same number of each type of atom must occur on both sides"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What is the general word equation for a metal reacting with an acid?",
		"a": "metal + acid → salt + hydrogen"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What are the products of an acid reacting with a metal hydroxide?",
		"a": "salt and water"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What are the products of an acid reacting with a metal carbonate?",
		"a": "salt, water and carbon dioxide"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Hydrochloric acid forms which type of salt?",
		"options": [
			"Chloride",
			"Sulfate",
			"Nitrate",
			"Carbonate"
		],
		"a": "Chloride"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Sulfuric acid forms which type of salt?",
		"options": [
			"Sulfate",
			"Chloride",
			"Nitrate",
			"Hydroxide"
		],
		"a": "Sulfate"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Nitric acid forms which type of salt?",
		"options": [
			"Nitrate",
			"Chloride",
			"Sulfate",
			"Carbonate"
		],
		"a": "Nitrate"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What gas is produced when a metal reacts with an acid?",
		"options": [
			"Hydrogen",
			"Oxygen",
			"Carbon dioxide",
			"Nitrogen"
		],
		"a": "Hydrogen"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What gas is produced when a metal carbonate reacts with an acid?",
		"options": [
			"Carbon dioxide",
			"Hydrogen",
			"Oxygen",
			"Nitrogen"
		],
		"a": "Carbon dioxide"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which indicator change is described for blue litmus in acid?",
		"options": [
			"It turns red",
			"It turns green",
			"It turns blue",
			"It becomes colourless"
		],
		"a": "It turns red"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "According to the supplied acid lesson, what does a pH value of 7 indicate?",
		"options": [
			"A neutral solution",
			"A strong acid",
			"A weak acid",
			"A metal ion"
		],
		"a": "A neutral solution"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What does a lower pH value indicate about an acidic solution, according to the supplied lesson?",
		"options": [
			"A greater concentration of hydrogen ions",
			"A lower concentration of hydrogen ions",
			"No hydrogen ions",
			"A higher concentration of neutrons"
		],
		"a": "A greater concentration of hydrogen ions"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which general equation represents acid + base?",
		"options": [
			"Acid + base → salt + water",
			"Acid + base → hydrogen + salt",
			"Acid + base → carbon dioxide + water",
			"Acid + base → oxygen + salt"
		],
		"a": "Acid + base → salt + water"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which general equation represents acid + metal carbonate?",
		"options": [
			"Acid + metal carbonate → salt + carbon dioxide + water",
			"Acid + metal carbonate → salt + hydrogen",
			"Acid + metal carbonate → metal + water",
			"Acid + metal carbonate → oxygen + salt"
		],
		"a": "Acid + metal carbonate → salt + carbon dioxide + water"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What is corrosion according to the supplied combustion and corrosion lesson?",
		"options": [
			"Slow oxidation of a metal",
			"Fast melting of a metal",
			"Formation of an ion by gaining electrons",
			"A reaction that never involves oxygen"
		],
		"a": "Slow oxidation of a metal"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What does rusting specifically refer to?",
		"options": [
			"Corrosion of iron",
			"Combustion of carbon",
			"Oxidation of copper",
			"Reaction of an acid with zinc"
		],
		"a": "Corrosion of iron"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What does combustion usually involve?",
		"options": [
			"A fuel reacting with oxygen to produce heat and light",
			"A metal gaining neutrons",
			"An acid reacting with a base",
			"A salt dissolving without any energy change"
		],
		"a": "A fuel reacting with oxygen to produce heat and light"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "How are combustion and corrosion related in the supplied lesson?",
		"options": [
			"Both are oxidation reactions; combustion is fast and corrosion is slow",
			"Both are always acid-base reactions",
			"Corrosion is always faster than combustion",
			"Neither involves oxygen"
		],
		"a": "Both are oxidation reactions; combustion is fast and corrosion is slow"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What type of energy change is described for oxidation reactions in the supplied lesson?",
		"options": [
			"They are exothermic and release energy",
			"They always absorb energy",
			"They have no energy change",
			"They only convert mass into protons"
		],
		"a": "They are exothermic and release energy"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which equation is balanced?",
		"options": [
			"2H₂ + O₂ → 2H₂O",
			"H₂ + O₂ → H₂O",
			"H₂ + 2O₂ → H₂O",
			"2H₂ + 2O₂ → H₂O"
		],
		"a": "2H₂ + O₂ → 2H₂O"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which equation correctly represents zinc reacting with hydrochloric acid?",
		"options": [
			"Zn + 2HCl → ZnCl₂ + H₂",
			"Zn + HCl → ZnCl₂ + H₂",
			"2Zn + HCl → ZnCl₂ + H₂",
			"Zn + 2HCl → ZnCl + H₂"
		],
		"a": "Zn + 2HCl → ZnCl₂ + H₂"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which equation correctly represents hydrochloric acid reacting with sodium hydroxide?",
		"options": [
			"HCl + NaOH → NaCl + H₂O",
			"HCl + NaOH → NaH + ClOH",
			"2HCl + NaOH → NaCl + H₂O",
			"HCl + 2NaOH → NaCl + H₂O"
		],
		"a": "HCl + NaOH → NaCl + H₂O"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which equation correctly represents calcium carbonate reacting with hydrochloric acid?",
		"options": [
			"CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂",
			"CaCO₃ + HCl → CaCl₂ + H₂O + CO₂",
			"CaCO₃ + 2HCl → CaCl + H₂ + CO₂",
			"2CaCO₃ + HCl → CaCl₂ + H₂O + CO₂"
		],
		"a": "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "In the supplied common-ion laboratory, which solution supplied hydroxide ions?",
		"options": [
			"Sodium hydroxide",
			"Calcium chloride",
			"Copper sulfate",
			"Iron(III) chloride"
		],
		"a": "Sodium hydroxide"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What observation were students instructed to look for in the common-ion laboratory?",
		"options": [
			"A colour change and the appearance of an insoluble solid",
			"Only a temperature decrease",
			"Only bubbles from boiling",
			"A magnetic attraction"
		],
		"a": "A colour change and the appearance of an insoluble solid"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which safety equipment was specified for the common-ion laboratory?",
		"options": [
			"Safety glasses and a lab coat",
			"Only headphones",
			"A bicycle helmet",
			"No protective equipment"
		],
		"a": "Safety glasses and a lab coat"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "In the supplied atomic model material, where are electrons represented?",
		"options": [
			"Around the nucleus",
			"Inside the nucleus",
			"Only inside neutrons",
			"Between protons in the nucleus"
		],
		"a": "Around the nucleus"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "How does the periodic table order elements according to the supplied PhET worksheet?",
		"options": [
			"By increasing atomic number from left to right",
			"By decreasing atomic number from left to right",
			"By increasing atomic mass from right to left",
			"Randomly by symbol"
		],
		"a": "By increasing atomic number from left to right"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "What causes an atom to become charged according to the supplied PhET worksheet?",
		"options": [
			"Its number of electrons is not equal to its number of protons",
			"Its number of neutrons equals its number of protons",
			"It has any number of neutrons",
			"It contains an electron"
		],
		"a": "Its number of electrons is not equal to its number of protons"
	},
	{
		"cat": "chemistry",
		"type": "mcq",
		"q": "Which two particles are found only in the nucleus in the supplied atomic-model activity?",
		"options": [
			"Protons and neutrons",
			"Protons and electrons",
			"Neutrons and electrons",
			"Electrons and ions"
		],
		"a": "Protons and neutrons"
	},
	{
		"cat": "chemistry",
		"type": "text",
		"q": "What is the general equation for an acid reacting with a metal hydroxide?",
		"a": "acid + base → salt + water"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is homeostasis?",
		"options": [
			"Maintenance of a constant internal environment",
			"Movement of the skeleton",
			"Digestion of food",
			"Production of hormones"
		],
		"a": "Maintenance of a constant internal environment"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which sequence matches the stimulus-response model?",
		"options": [
			"Stimulus → receptor → coordinating centre → effector → response",
			"Receptor → stimulus → effector → response",
			"Effector → receptor → stimulus → response",
			"Stimulus → effector → receptor → response"
		],
		"a": "Stimulus → receptor → coordinating centre → effector → response"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is the role of a receptor?",
		"options": [
			"Detect a change or stimulus",
			"Carry out the response",
			"Release every hormone",
			"Store glucose"
		],
		"a": "Detect a change or stimulus"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is the role of an effector?",
		"options": [
			"Carry out a response to a stimulus",
			"Detect the stimulus",
			"Always produce hormones",
			"Transmit light into the eye"
		],
		"a": "Carry out a response to a stimulus"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which is an example of positive feedback in the supplied revision questions?",
		"options": [
			"Blood clotting",
			"Sweating when hot",
			"Shivering when cold",
			"Dilation of blood vessels"
		],
		"a": "Blood clotting"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which part of the brain coordinates temperature regulation?",
		"options": [
			"Hypothalamus",
			"Cerebellum",
			"Brain stem",
			"Medulla"
		],
		"a": "Hypothalamus"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is negative feedback?",
		"options": [
			"A response that reduces the effect of the stimulus",
			"A response that increases the stimulus",
			"A response that ignores a stimulus",
			"A process that stops all body functions"
		],
		"a": "A response that reduces the effect of the stimulus"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What can happen if internal conditions move outside the tolerance range?",
		"options": [
			"Severe illness or death may occur",
			"The body always returns to normal instantly",
			"Nothing changes",
			"Blood glucose always falls"
		],
		"a": "Severe illness or death may occur"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What does the central nervous system include?",
		"options": [
			"Brain and spinal cord",
			"Brain and all nerves",
			"Nerves and muscles",
			"Heart and lungs"
		],
		"a": "Brain and spinal cord"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which system controls involuntary functions such as sweating?",
		"options": [
			"Autonomic nervous system",
			"Somatic nervous system",
			"Central nervous system",
			"Endocrine system"
		],
		"a": "Autonomic nervous system"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What does the peripheral nervous system do?",
		"options": [
			"Carries messages to and from the CNS",
			"Produces insulin",
			"Controls only the heart",
			"Makes hormones"
		],
		"a": "Carries messages to and from the CNS"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which part of a neuron receives information from other cells?",
		"options": [
			"Dendrite",
			"Axon",
			"Myelin sheath",
			"Cell body"
		],
		"a": "Dendrite"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is the function of the axon?",
		"options": [
			"Transmits information away from the cell body",
			"Receives all signals from receptors",
			"Produces hormones",
			"Insulates the brain"
		],
		"a": "Transmits information away from the cell body"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What does myelin do?",
		"options": [
			"Insulates the axon and allows faster electrical signal transmission",
			"Slows nerve impulses",
			"Detects chemicals",
			"Produces neurotransmitters"
		],
		"a": "Insulates the axon and allows faster electrical signal transmission"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which neuron carries information from receptors to the CNS?",
		"options": [
			"Sensory neuron",
			"Motor neuron",
			"Interneuron",
			"Endocrine neuron"
		],
		"a": "Sensory neuron"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which neuron carries messages from the CNS to muscles or glands?",
		"options": [
			"Motor neuron",
			"Sensory neuron",
			"Interneuron",
			"Photoreceptor"
		],
		"a": "Motor neuron"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Where are interneurons located according to the supplied material?",
		"options": [
			"CNS, including the brain and spinal cord",
			"Skin",
			"Muscles only",
			"Endocrine glands"
		],
		"a": "CNS, including the brain and spinal cord"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is a neurotransmitter?",
		"options": [
			"A chemical messenger that carries a message across a synapse",
			"A fatty layer around an axon",
			"A gland",
			"A sensory organ"
		],
		"a": "A chemical messenger that carries a message across a synapse"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is a reflex?",
		"options": [
			"A fast automatic response that helps protect the body from harm",
			"A slow conscious decision",
			"A hormone released by the pancreas",
			"A type of endocrine gland"
		],
		"a": "A fast automatic response that helps protect the body from harm"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is the sequence in the reflex arc described in the supplied material?",
		"options": [
			"Stimulus → receptor → sensory neuron → spinal cord/interneuron → motor neuron → effector",
			"Stimulus → motor neuron → receptor → brain → effector",
			"Receptor → stimulus → motor neuron → sensory neuron",
			"Stimulus → hormone → receptor → muscle"
		],
		"a": "Stimulus → receptor → sensory neuron → spinal cord/interneuron → motor neuron → effector"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which receptor detects visible light?",
		"options": [
			"Photoreceptor",
			"Thermoreceptor",
			"Mechanoreceptor",
			"Chemoreceptor"
		],
		"a": "Photoreceptor"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which receptor detects changes in temperature?",
		"options": [
			"Thermoreceptor",
			"Photoreceptor",
			"Nociceptor",
			"Chemoreceptor"
		],
		"a": "Thermoreceptor"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which receptor detects chemicals in food and the environment?",
		"options": [
			"Chemoreceptor",
			"Mechanoreceptor",
			"Photoreceptor",
			"Nociceptor"
		],
		"a": "Chemoreceptor"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which receptor detects pain?",
		"options": [
			"Nociceptor",
			"Photoreceptor",
			"Thermoreceptor",
			"Chemoreceptor"
		],
		"a": "Nociceptor"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Where are sound and balance mechanoreceptors located?",
		"options": [
			"Inner ear",
			"Skin only",
			"Nasal passages",
			"Pancreas"
		],
		"a": "Inner ear"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is the function of the endocrine system?",
		"options": [
			"Produce and release hormones",
			"Carry electrical impulses only",
			"Digest food",
			"Pump blood"
		],
		"a": "Produce and release hormones"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which gland is described as the master gland?",
		"options": [
			"Pituitary gland",
			"Thyroid gland",
			"Adrenal gland",
			"Pancreas"
		],
		"a": "Pituitary gland"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is a hormone?",
		"options": [
			"A chemical messenger transported in the bloodstream",
			"An electrical impulse in an axon",
			"A type of neuron",
			"A digestive enzyme"
		],
		"a": "A chemical messenger transported in the bloodstream"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Why do hormones only activate particular target cells?",
		"options": [
			"Target cells possess the appropriate receptor",
			"All cells have the same receptor",
			"Hormones only travel to the brain",
			"Hormones are electrical signals"
		],
		"a": "Target cells possess the appropriate receptor"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which gland releases insulin when blood glucose is high?",
		"options": [
			"Pancreas",
			"Thyroid",
			"Adrenal gland",
			"Pineal gland"
		],
		"a": "Pancreas"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What does insulin do to blood glucose levels?",
		"options": [
			"Lowers blood glucose",
			"Raises blood glucose",
			"Raises body temperature",
			"Controls breathing"
		],
		"a": "Lowers blood glucose"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What does glucagon do when blood glucose is low?",
		"options": [
			"Raises blood glucose",
			"Lowers blood glucose",
			"Controls sleep",
			"Causes sweating"
		],
		"a": "Raises blood glucose"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which gland releases adrenaline for fight-or-flight responses?",
		"options": [
			"Adrenal gland",
			"Pancreas",
			"Pineal gland",
			"Thyroid gland"
		],
		"a": "Adrenal gland"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which gland regulates metabolism?",
		"options": [
			"Thyroid gland",
			"Adrenal gland",
			"Pancreas",
			"Pituitary gland"
		],
		"a": "Thyroid gland"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What is melatonin associated with?",
		"options": [
			"Regulating the sleep-wake cycle",
			"Blood glucose control",
			"Fight-or-flight",
			"Water reabsorption"
		],
		"a": "Regulating the sleep-wake cycle"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which hormone is key to regulating blood water levels in the supplied material?",
		"options": [
			"Anti-diuretic hormone (ADH)",
			"Insulin",
			"Glucagon",
			"Adrenaline"
		],
		"a": "Anti-diuretic hormone (ADH)"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Where is ADH produced according to the supplied endocrine material?",
		"options": [
			"Pituitary gland",
			"Pancreas",
			"Thyroid gland",
			"Adrenal gland"
		],
		"a": "Pituitary gland"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What does ADH regulate?",
		"options": [
			"How much water the kidneys absorb from the blood",
			"How much oxygen enters the lungs",
			"How much glucose enters the stomach",
			"How quickly neurons fire"
		],
		"a": "How much water the kidneys absorb from the blood"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "What happens to blood vessels when internal body temperature is high, according to the revision material?",
		"options": [
			"They dilate",
			"They constrict",
			"They disappear",
			"They stop carrying blood"
		],
		"a": "They dilate"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which response helps cool the body when it is too hot?",
		"options": [
			"Sweating",
			"Shivering",
			"Releasing glucagon",
			"Increasing blood glucose"
		],
		"a": "Sweating"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "Which is described as a structural mechanism for thermoregulation?",
		"options": [
			"Thick hair or fur",
			"Sweating",
			"Shivering",
			"Blood vessel dilation"
		],
		"a": "Thick hair or fur"
	},
	{
		"cat": "body",
		"type": "mcq",
		"q": "How do the nervous and endocrine systems support homeostasis?",
		"options": [
			"They coordinate responses that restore internal conditions toward their optimal range",
			"They only control movement",
			"They only control digestion",
			"They work independently and never interact"
		],
		"a": "They coordinate responses that restore internal conditions toward their optimal range"
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What is the name for the maintenance of a constant internal environment?",
		"a": ["homeostasis"]
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What is the name for the fatty tissue surrounding an axon that acts as an insulator?",
		"a": ["myelin", "myelin sheath"]
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What chemical messenger crosses a synapse?",
		"a": ["neurotransmitter", "neurotransmitter chemical"]
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What hormone lowers blood glucose?",
		"a": ["insulin"]
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What hormone raises blood glucose when it is low?",
		"a": ["glucagon"]
	},
	{
		"cat": "body",
		"type": "text",
		"q": "What hormone regulates blood water levels according to the supplied material?",
		"a": [
			"ADH",
			"anti-diuretic hormone",
			"antidiuretic hormone"
		]
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which four Earth spheres are named in the supplied carbon-cycle material?",
		"options": [
			"Atmosphere, hydrosphere, biosphere and geosphere",
			"Atmosphere, mantle, core and crust",
			"Biosphere, ionosphere, magnetosphere and core",
			"Hydrosphere, stratosphere, thermosphere and core"
		],
		"a": "Atmosphere, hydrosphere, biosphere and geosphere"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which process uses carbon dioxide and water in the presence of light to make glucose and release oxygen?",
		"options": [
			"Photosynthesis",
			"Cellular respiration",
			"Decomposition",
			"Combustion"
		],
		"a": "Photosynthesis"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Where does photosynthesis occur in plant cells?",
		"options": [
			"Chloroplasts",
			"Mitochondria",
			"Nucleus",
			"Ribosomes"
		],
		"a": "Chloroplasts"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What are the reactants of photosynthesis in the supplied material?",
		"options": [
			"Carbon dioxide and water",
			"Glucose and oxygen",
			"Carbon dioxide and oxygen",
			"Glucose and water"
		],
		"a": "Carbon dioxide and water"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What are the products of photosynthesis in the supplied material?",
		"options": [
			"Glucose and oxygen",
			"Carbon dioxide and water",
			"ATP and carbon dioxide",
			"Methane and oxygen"
		],
		"a": "Glucose and oxygen"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What are stomata used for?",
		"options": [
			"Gas exchange into and out of the plant",
			"Making glucose directly",
			"Transporting blood",
			"Storing fossil fuels"
		],
		"a": "Gas exchange into and out of the plant"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What type of reaction is photosynthesis described as?",
		"options": [
			"Endothermic",
			"Exothermic",
			"Neutral",
			"Combustion"
		],
		"a": "Endothermic"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Where does cellular respiration occur?",
		"options": [
			"Mitochondria",
			"Chloroplasts",
			"Cell wall",
			"Nucleus"
		],
		"a": "Mitochondria"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which organisms carry out cellular respiration according to the supplied material?",
		"options": [
			"All living organisms",
			"Only animals",
			"Only plants",
			"Only fungi"
		],
		"a": "All living organisms"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What are the reactants of cellular respiration?",
		"options": [
			"Glucose and oxygen",
			"Carbon dioxide and water",
			"Glucose and carbon dioxide",
			"Oxygen and water"
		],
		"a": "Glucose and oxygen"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What are the products of cellular respiration?",
		"options": [
			"Carbon dioxide, water and ATP/energy",
			"Glucose and oxygen",
			"Carbon monoxide and soot",
			"Only oxygen"
		],
		"a": "Carbon dioxide, water and ATP/energy"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What type of reaction is cellular respiration described as?",
		"options": [
			"Exothermic",
			"Endothermic",
			"Neutral",
			"Photosynthetic"
		],
		"a": "Exothermic"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "How are photosynthesis and cellular respiration linked?",
		"options": [
			"The products of one are the reactants of the other",
			"They use exactly the same reactants and products",
			"Neither involves carbon",
			"Both only occur in plants"
		],
		"a": "The products of one are the reactants of the other"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What happens during decomposition?",
		"options": [
			"Decomposers break dead organisms into simpler matter",
			"Plants turn oxygen into glucose",
			"Rocks turn into animals",
			"Fossil fuels instantly form"
		],
		"a": "Decomposers break dead organisms into simpler matter"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which are listed as products of decomposition?",
		"options": [
			"Carbon dioxide, water, simple sugars and minerals",
			"Only oxygen",
			"Glucose and oxygen only",
			"Hydrogen and nitrogen only"
		],
		"a": "Carbon dioxide, water, simple sugars and minerals"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is lithification?",
		"options": [
			"Turning sediment into sedimentary rock through compression, compaction and cementation",
			"Burning fossil fuels",
			"Turning glucose into ATP",
			"Breaking down glucose"
		],
		"a": "Turning sediment into sedimentary rock through compression, compaction and cementation"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "How can fossil fuels form from dead organic matter according to the supplied material?",
		"options": [
			"Burial under sediment followed by heat and pressure over millions of years",
			"Immediate exposure to oxygen",
			"Photosynthesis in leaves",
			"Rapid evaporation"
		],
		"a": "Burial under sediment followed by heat and pressure over millions of years"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Coal is described as forming mainly from what ancient material?",
		"options": [
			"Plant material, especially in swamps",
			"Only marine animals",
			"Atmospheric carbon dioxide",
			"Freshwater oxygen"
		],
		"a": "Plant material, especially in swamps"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Oil and natural gas are described as forming mainly from what?",
		"options": [
			"Microscopic marine organisms",
			"Only trees",
			"Atmospheric oxygen",
			"Rocks with no organic matter"
		],
		"a": "Microscopic marine organisms"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is complete combustion?",
		"options": [
			"A fuel burns with unlimited oxygen",
			"A fuel burns with limited oxygen",
			"A fuel burns without oxygen",
			"A fuel dissolves in water"
		],
		"a": "A fuel burns with unlimited oxygen"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What are the main products of complete combustion of a hydrocarbon in the supplied material?",
		"options": [
			"Carbon dioxide, water and energy",
			"Carbon monoxide, soot and water",
			"Glucose and oxygen",
			"Carbon dioxide and ATP"
		],
		"a": "Carbon dioxide, water and energy"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is incomplete combustion?",
		"options": [
			"Combustion with limited oxygen",
			"Combustion with unlimited oxygen",
			"Combustion in living cells only",
			"A reaction with no energy release"
		],
		"a": "Combustion with limited oxygen"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which poisonous gas can be produced by incomplete combustion?",
		"options": [
			"Carbon monoxide",
			"Oxygen",
			"Hydrogen",
			"Nitrogen"
		],
		"a": "Carbon monoxide"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What black solid can be produced by incomplete combustion?",
		"options": [
			"Carbon/soot",
			"Glucose",
			"Limestone",
			"Oxygen"
		],
		"a": "Carbon/soot"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "How does incomplete combustion compare with complete combustion in the supplied material?",
		"options": [
			"Less heat energy is produced",
			"More oxygen is always produced",
			"It always produces ATP",
			"It never produces carbon-containing products"
		],
		"a": "Less heat energy is produced"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is a hydrocarbon?",
		"options": [
			"A molecule containing only carbon and hydrogen",
			"A molecule containing only oxygen and hydrogen",
			"A type of mineral",
			"A protein containing nitrogen"
		],
		"a": "A molecule containing only carbon and hydrogen"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which fossil fuels are named in the supplied material?",
		"options": [
			"Oil, natural gas and coal",
			"Wood, water and oxygen",
			"Glucose, ATP and oxygen",
			"Limestone, salt and water"
		],
		"a": "Oil, natural gas and coal"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What human activity has increased atmospheric carbon dioxide according to the supplied material?",
		"options": [
			"Large-scale extraction and burning of fossil fuels",
			"Photosynthesis",
			"Decomposition alone",
			"Formation of sedimentary rock"
		],
		"a": "Large-scale extraction and burning of fossil fuels"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which process removes carbon dioxide from the atmosphere into glucose?",
		"options": [
			"Photosynthesis",
			"Respiration",
			"Combustion",
			"Decomposition"
		],
		"a": "Photosynthesis"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which process returns carbon dioxide to the atmosphere from living cells?",
		"options": [
			"Cellular respiration",
			"Photosynthesis",
			"Lithification",
			"Weathering only"
		],
		"a": "Cellular respiration"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What does consumption do in the carbon cycle?",
		"options": [
			"Moves carbon from one organism to another when organisms eat",
			"Removes all carbon from Earth",
			"Creates carbon from nothing",
			"Turns oxygen into glucose"
		],
		"a": "Moves carbon from one organism to another when organisms eat"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What can happen to carbon in dead organisms over geological time?",
		"options": [
			"It can become part of fossil fuels or rocks",
			"It always becomes oxygen",
			"It disappears completely",
			"It immediately returns to glucose"
		],
		"a": "It can become part of fossil fuels or rocks"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is carbon sequestration?",
		"options": [
			"Capturing and storing carbon so it does not enter the atmosphere",
			"Burning carbon quickly",
			"Turning carbon dioxide into oxygen without storage",
			"Removing all carbon from living organisms"
		],
		"a": "Capturing and storing carbon so it does not enter the atmosphere"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which process moves dissolved material from rain or soil toward oceans in the supplied worksheet?",
		"options": [
			"Dissolved in rain/soil and carried to oceans",
			"Photosynthesis",
			"Combustion",
			"Consumption"
		],
		"a": "Dissolved in rain/soil and carried to oceans"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What is stored in limestone according to the carbon-cycle worksheet?",
		"options": [
			"Carbon",
			"Only oxygen",
			"Only hydrogen",
			"ATP"
		],
		"a": "Carbon"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "What form of carbon is listed as being dissolved in seawater?",
		"options": [
			"Dissolved carbon",
			"Glucose only",
			"Coal",
			"Soot only"
		],
		"a": "Dissolved carbon"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which process transfers carbon into green plants?",
		"options": [
			"Photosynthesis",
			"Respiration",
			"Combustion",
			"Lithification"
		],
		"a": "Photosynthesis"
	},
	{
		"cat": "carbon",
		"type": "mcq",
		"q": "Which process transfers carbon from living organisms to the geosphere through death and burial?",
		"options": [
			"Burial and compression",
			"Photosynthesis",
			"Respiration",
			"Combustion"
		],
		"a": "Burial and compression"
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "Write the word equation for photosynthesis.",
		"a": ["carbon dioxide + water → glucose + oxygen", "carbon dioxide + water -> glucose + oxygen"]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "Write the word equation for cellular respiration.",
		"a": ["glucose + oxygen → carbon dioxide + water + energy", "glucose + oxygen -> carbon dioxide + water + energy"]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "What is the process of turning sediment into sedimentary rock called?",
		"a": ["lithification"]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "What poisonous gas may form during incomplete combustion?",
		"a": ["carbon monoxide", "CO"]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "What black carbon product may form during incomplete combustion?",
		"a": [
			"soot",
			"carbon",
			"carbon soot"
		]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "What type of reaction is photosynthesis?",
		"a": ["endothermic"]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "What type of reaction is cellular respiration?",
		"a": ["exothermic"]
	},
	{
		"cat": "carbon",
		"type": "text",
		"q": "What is the name of the process where dead organisms are broken down by decomposers?",
		"a": ["decomposition", "decomposition (rotting)"]
	}
];
var extraQuestions = [
	{
		cat: "energy",
		type: "mcq",
		q: "Energy is defined as the capacity to:",
		options: [
			"Create matter",
			"Do work",
			"Change temperature only"
		],
		a: "Do work",
		source: "Energy transfers and transformations 2025"
	},
	{
		cat: "energy",
		type: "text",
		q: "What unit is energy measured in?",
		a: [
			"joules",
			"joule",
			"J"
		],
		source: "Energy transfers and transformations 2025"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "The 1st law of thermodynamics (law of conservation of energy) says energy cannot be:",
		options: [
			"Transferred",
			"Transformed",
			"Created or destroyed"
		],
		a: "Created or destroyed",
		source: "Energy transfers and transformations 2025"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Kinetic energy is the energy of:",
		options: [
			"Position",
			"Movement",
			"Chemical bonds"
		],
		a: "Movement",
		source: "Energy transfers and transformations 2025"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Gravitational potential energy is stored because of an object's:",
		options: [
			"Speed",
			"Colour",
			"Position in a gravitational field"
		],
		a: "Position in a gravitational field",
		source: "Energy transfers and transformations 2025"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "A battery converting chemical energy into electrical energy is an example of:",
		options: [
			"Energy destruction",
			"An energy transformation",
			"A nuclear reaction"
		],
		a: "An energy transformation",
		source: "Energy transfers and transformations 2025"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "In the PhET energy systems sim, sunlight hitting a solar panel is mainly converted into:",
		options: [
			"Sound energy",
			"Electrical energy",
			"Nuclear energy"
		],
		a: "Electrical energy",
		source: "Energy Forms & Changes (PhET)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Why must the cyclist in the energy simulation be fed to keep pedalling?",
		options: [
			"Food is needed as a chemical energy source",
			"Food increases gravity",
			"Food creates new energy from nothing"
		],
		a: "Food is needed as a chemical energy source",
		source: "Energy Forms & Changes (PhET)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "On a frictionless skate track, as the skater goes downhill, gravitational potential energy is mainly converted into:",
		options: [
			"Chemical energy",
			"Kinetic energy",
			"Nuclear energy"
		],
		a: "Kinetic energy",
		source: "Energy Skate Park Basics (PhET)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "If a frictionless skater starts from rest at the top, where is kinetic energy greatest?",
		options: [
			"At the highest point",
			"At the lowest point",
			"It is the same everywhere"
		],
		a: "At the lowest point",
		source: "Energy Skate Park Basics (PhET)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Adding friction to a skate track causes some mechanical energy to become:",
		options: [
			"Thermal energy",
			"Nuclear energy",
			"Chemical energy"
		],
		a: "Thermal energy",
		source: "Energy Skate Park Basics (PhET)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "On a Sankey diagram, the width of each arrow represents:",
		options: [
			"Time taken",
			"The amount of energy",
			"Temperature"
		],
		a: "The amount of energy",
		source: "Sankey Energy Diagrams"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Why does the input arrow on a Sankey diagram equal the total width of the output arrows?",
		options: [
			"Energy is conserved",
			"Heat is ignored",
			"Useful energy is always 50%"
		],
		a: "Energy is conserved",
		source: "Sankey Energy Diagrams"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "In a typical Sankey diagram, arrows that continue to the right show:",
		options: [
			"Wasted energy",
			"Useful energy",
			"Nuclear energy only"
		],
		a: "Useful energy",
		source: "Sankey Energy Diagrams Worksheet"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "An old filament lamp uses 100 J of electrical energy and gives out 10 J of light. How much energy is wasted as heat?",
		options: [
			"10 J",
			"90 J",
			"110 J"
		],
		a: "90 J",
		source: "Sankey Energy Diagrams"
	},
	{
		cat: "energy",
		type: "text",
		q: "Write the formula for energy efficiency as a percentage.",
		a: [
			"efficiency = useful energy / input energy x 100",
			"useful energy / input energy x 100",
			"(useful / input) x 100"
		],
		source: "Sankey Energy Diagrams"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "A vacuum cleaner takes in 1440 kJ and produces 430 kJ of useful motion. What is its efficiency (nearest whole number)?",
		options: [
			"30%",
			"70%",
			"43%"
		],
		a: "30%",
		source: "Sankey Energy Diagrams"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "A fluorescent bulb that turns 12 J of electrical energy into 6 J of light wastes how much heat energy?",
		options: [
			"6 J",
			"12 J",
			"18 J"
		],
		a: "6 J",
		source: "Sankey Energy Diagrams Worksheet"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Work is done when a force causes an object to:",
		options: [
			"Stay still",
			"Be displaced",
			"Change colour"
		],
		a: "Be displaced",
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "A waiter carrying a tray at constant height across a room is not doing work on the tray because:",
		options: [
			"There is no force",
			"The force is not in the direction of the displacement",
			"Gravity is switched off"
		],
		a: "The force is not in the direction of the displacement",
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "text",
		q: "Write the formula for work done.",
		a: [
			"W = F x s",
			"W = Fs",
			"work = force x distance",
			"work = force x displacement"
		],
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Robert pushes a car 50 m with a force of 1000 N. How much work has he done?",
		options: [
			"1050 J",
			"50 000 J",
			"1000 J"
		],
		a: "50 000 J",
		source: "Work, GPE & KE questions"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Using g = 10 N/kg, how much GPE does a 5 kg cat gain when lifted 2 m?",
		options: [
			"10 J",
			"100 J",
			"25 J"
		],
		a: "100 J",
		source: "Work, GPE & KE questions"
	},
	{
		cat: "energy",
		type: "text",
		q: "Write the formula for gravitational potential energy.",
		a: [
			"Ep = mgh",
			"GPE = mgh",
			"Ep = m x g x h"
		],
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "text",
		q: "Write the formula for kinetic energy.",
		a: [
			"Ek = 1/2 mv^2",
			"KE = 1/2 mv^2",
			"Ek = 0.5mv^2",
			"KE = 1/2 x mass x velocity^2"
		],
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "A 3 kg cat runs at 4 m/s. What is its kinetic energy?",
		options: [
			"12 J",
			"24 J",
			"6 J"
		],
		a: "24 J",
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "Mechanical energy is the sum of:",
		options: [
			"Heat and light",
			"Kinetic and potential energy",
			"Work and power"
		],
		a: "Kinetic and potential energy",
		source: "Work, GPE & KE (Formulas)"
	},
	{
		cat: "energy",
		type: "mcq",
		q: "A 50 kg goat jumps from a 450 m cliff. Using g = 10 N/kg, what GPE does it lose?",
		options: [
			"4500 J",
			"225 000 J",
			"50 J"
		],
		a: "225 000 J",
		source: "Work, GPE & KE questions"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Which list is the electromagnetic spectrum in order of increasing frequency?",
		options: [
			"Gamma, X-ray, UV, visible, IR, microwave, radio",
			"Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma",
			"Radio, visible, microwave, X-ray, gamma, UV, infrared"
		],
		a: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "All electromagnetic waves travel at the same speed in a vacuum, which is about:",
		options: [
			"340 m/s",
			"300 000 000 m/s",
			"3 m/s"
		],
		a: "300 000 000 m/s",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Electromagnetic waves are:",
		options: [
			"Longitudinal and need a medium",
			"Transverse and can travel through a vacuum",
			"Particles that cannot reflect"
		],
		a: "Transverse and can travel through a vacuum",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "emspectrum",
		type: "text",
		q: "Write the wave equation relating speed, frequency and wavelength.",
		a: [
			"v = f λ",
			"v = f x λ",
			"v = fλ",
			"speed = frequency x wavelength"
		],
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Shorter wavelength electromagnetic waves carry:",
		options: [
			"Less energy",
			"More energy",
			"The same energy as radio waves"
		],
		a: "More energy",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Which EM waves have the longest wavelength?",
		options: [
			"Gamma rays",
			"X-rays",
			"Radio waves"
		],
		a: "Radio waves",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Microwaves heat food mainly by:",
		options: [
			"Making water molecules vibrate",
			"Ionising the food",
			"Turning food into plasma"
		],
		a: "Making water molecules vibrate",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Infrared radiation is commonly used for:",
		options: [
			"Bone imaging",
			"Thermal detection and heating",
			"Killing all bacteria in a vacuum pack only"
		],
		a: "Thermal detection and heating",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "The hotter an object is, the more infrared radiation it:",
		options: [
			"Reflects only",
			"Emits",
			"Blocks"
		],
		a: "Emits",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Visible light wavelengths are about:",
		options: [
			"390–780 nm",
			"10–1000 m",
			"0.001 nm"
		],
		a: "390–780 nm",
		source: "Visible Light"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Red is always next to which part of the spectrum?",
		options: [
			"Ultraviolet",
			"Infrared",
			"X-rays"
		],
		a: "Infrared",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Violet is always next to:",
		options: [
			"Microwaves",
			"Ultraviolet",
			"Radio waves"
		],
		a: "Ultraviolet",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "A benefit of some UV exposure is that skin can make:",
		options: [
			"Vitamin D",
			"Vitamin K",
			"Insulin"
		],
		a: "Vitamin D",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Overexposure to UV radiation increases the risk of:",
		options: [
			"Broken bones only",
			"Skin cancer and premature ageing",
			"Hearing loss"
		],
		a: "Skin cancer and premature ageing",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Chemicals that absorb UV and re-emit visible light are described as:",
		options: [
			"Magnetic",
			"Fluorescent",
			"Opaque"
		],
		a: "Fluorescent",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "X-rays are useful for imaging bones because they:",
		options: [
			"Pass through soft tissue more easily than dense bone",
			"Bounce off skin",
			"Are stopped by air"
		],
		a: "Pass through soft tissue more easily than dense bone",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Radiographers wear lead aprons because lead is:",
		options: [
			"A good source of X-rays",
			"Dense enough to absorb X-rays",
			"Transparent to gamma only"
		],
		a: "Dense enough to absorb X-rays",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Gamma rays are emitted by:",
		options: [
			"Hot kettle coils only",
			"Certain radioactive materials",
			"Sound speakers"
		],
		a: "Certain radioactive materials",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Gamma rays are used to sterilise medical equipment because they:",
		options: [
			"Are highly penetrating and kill living cells",
			"Are stopped by paper",
			"Heat water molecules only"
		],
		a: "Are highly penetrating and kill living cells",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "emspectrum",
		type: "mcq",
		q: "Ionizing waves can damage living tissue by:",
		options: [
			"Tickling nerve endings",
			"Killing cells or damaging DNA",
			"Only warming the skin slightly"
		],
		a: "Killing cells or damaging DNA",
		source: "The Electromagnetic Spectrum"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Objects that give out their own light are called:",
		options: [
			"Opaque",
			"Luminous",
			"Translucent"
		],
		a: "Luminous",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "The Moon is non-luminous because we see it by:",
		options: [
			"Light it produces itself",
			"Reflected light",
			"Sound waves"
		],
		a: "Reflected light",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "A material that transmits light so details behind it can be seen clearly is:",
		options: [
			"Transparent",
			"Translucent",
			"Opaque"
		],
		a: "Transparent",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Frosted glass is translucent because it:",
		options: [
			"Blocks all light",
			"Transmits some light but blurs detail",
			"Emits its own light"
		],
		a: "Transmits some light but blurs detail",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "We see objects because light travels:",
		options: [
			"From our eyes to the object",
			"From the object (or reflections) into our eyes",
			"Around corners as a sound"
		],
		a: "From the object (or reflections) into our eyes",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "The law of reflection states that the angle of incidence equals the:",
		options: [
			"Critical angle",
			"Angle of refraction",
			"Angle of reflection"
		],
		a: "Angle of reflection",
		source: "Reflection"
	},
	{
		cat: "light",
		type: "mcq",
		q: "The normal is a line drawn:",
		options: [
			"Parallel to the mirror",
			"At 90° to the surface",
			"Along the incident ray"
		],
		a: "At 90° to the surface",
		source: "Reflection"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Smooth, shiny surfaces give:",
		options: [
			"Diffuse reflection",
			"Clear (specular) reflection",
			"No reflection"
		],
		a: "Clear (specular) reflection",
		source: "Reflection"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Diffuse reflection happens when light hits:",
		options: [
			"A rough, dull surface and scatters",
			"A vacuum",
			"A perfectly flat mirror"
		],
		a: "A rough, dull surface and scatters",
		source: "Reflection"
	},
	{
		cat: "light",
		type: "mcq",
		q: "A concave mirror reflects parallel rays so they:",
		options: [
			"Diverge as if from behind the mirror",
			"Meet at a focal point",
			"Stop reflecting"
		],
		a: "Meet at a focal point",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Convex mirrors are used in shops because they:",
		options: [
			"Give a wide field of view",
			"Make everything look larger and closer only",
			"Produce real inverted images on a screen always"
		],
		a: "Give a wide field of view",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Refraction is the bending of light because:",
		options: [
			"Light is absorbed",
			"The speed of light changes in different materials",
			"Mirrors are curved"
		],
		a: "The speed of light changes in different materials",
		source: "Refraction"
	},
	{
		cat: "light",
		type: "mcq",
		q: "When light travels from air into glass (more dense), it:",
		options: [
			"Speeds up and bends away from the normal",
			"Slows down and bends towards the normal",
			"Stops"
		],
		a: "Slows down and bends towards the normal",
		source: "Refraction"
	},
	{
		cat: "light",
		type: "mcq",
		q: "When light travels from water into air it:",
		options: [
			"Speeds up and bends away from the normal",
			"Slows down and bends towards the normal",
			"Cannot leave the water"
		],
		a: "Speeds up and bends away from the normal",
		source: "Refraction"
	},
	{
		cat: "light",
		type: "mcq",
		q: "A pencil in a glass of water looks bent because:",
		options: [
			"The pencil actually snaps",
			"Light from the underwater part is refracted",
			"Water is opaque"
		],
		a: "Light from the underwater part is refracted",
		source: "Refraction"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Total internal reflection can occur when light is travelling:",
		options: [
			"From a less dense medium into a more dense medium",
			"From a more dense medium towards a less dense medium at or above the critical angle",
			"Through a vacuum only"
		],
		a: "From a more dense medium towards a less dense medium at or above the critical angle",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "A convex (converging) lens is thicker in the middle and can:",
		options: [
			"Only make images smaller",
			"Bring parallel rays to a focus",
			"Always scatter light randomly"
		],
		a: "Bring parallel rays to a focus",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "White light is split into colours by a prism because different colours:",
		options: [
			"Have the same wavelength",
			"Slow by different amounts",
			"Are absorbed equally"
		],
		a: "Slow by different amounts",
		source: "Colour Powerpoint"
	},
	{
		cat: "light",
		type: "text",
		q: "Write the order of rainbow colours from red to violet (ROYGBIV).",
		a: [
			"red orange yellow green blue indigo violet",
			"roygbiv",
			"red, orange, yellow, green, blue, indigo, violet"
		],
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "In a prism, which colour is refracted the least?",
		options: [
			"Violet",
			"Red",
			"Green"
		],
		a: "Red",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "The primary colours of light are:",
		options: [
			"Red, yellow, blue",
			"Red, green, blue",
			"Cyan, magenta, yellow"
		],
		a: "Red, green, blue",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Red light plus green light produces:",
		options: [
			"Cyan",
			"Yellow",
			"Magenta"
		],
		a: "Yellow",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "light",
		type: "mcq",
		q: "A red object looks red because it:",
		options: [
			"Emits only red light",
			"Mainly reflects red light and absorbs other colours",
			"Absorbs only red light"
		],
		a: "Mainly reflects red light and absorbs other colours",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "A black object looks black because it:",
		options: [
			"Reflects all colours",
			"Absorbs most colours of light",
			"Produces black light"
		],
		a: "Absorbs most colours of light",
		source: "Visible Light"
	},
	{
		cat: "light",
		type: "mcq",
		q: "Scientists now describe light as having a dual nature, meaning it behaves as:",
		options: [
			"Only a wave",
			"Only a particle",
			"Both a wave and particles (photons)"
		],
		a: "Both a wave and particles (photons)",
		source: "Light Booklet Year 9 2025"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Electric current is the flow of:",
		options: [
			"Protons around a magnet",
			"Electrons around a connected circuit",
			"Sound through a wire"
		],
		a: "Electrons around a connected circuit",
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "electricity",
		type: "text",
		q: "What unit is electric current measured in?",
		a: [
			"amps",
			"amperes",
			"A"
		],
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Voltage is measured with a voltmeter connected:",
		options: [
			"In series with the component",
			"Across (in parallel with) the component",
			"Only to earth"
		],
		a: "Across (in parallel with) the component",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "An ammeter must be connected:",
		options: [
			"In series with the component",
			"In parallel with the component",
			"Outside the circuit"
		],
		a: "In series with the component",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "In a series circuit the current is:",
		options: [
			"Different at every point",
			"The same at any point",
			"Zero except at the battery"
		],
		a: "The same at any point",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "In a series circuit the supply voltage is:",
		options: [
			"The same across every component",
			"Shared between the components",
			"Always zero"
		],
		a: "Shared between the components",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "In a parallel circuit the source voltage across each branch is:",
		options: [
			"Shared so each branch gets less",
			"The same as the source voltage",
			"Always half"
		],
		a: "The same as the source voltage",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "In a parallel circuit the current:",
		options: [
			"Is identical in every wire",
			"Splits between the branches",
			"Cannot flow"
		],
		a: "Splits between the branches",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Adding an extra battery in series usually makes the current:",
		options: [
			"Decrease because of more resistance",
			"Increase because there is a greater push on the electrons",
			"Stay exactly the same"
		],
		a: "Increase because there is a greater push on the electrons",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Adding an extra bulb in series usually makes the current:",
		options: [
			"Increase",
			"Decrease because there is greater resistance",
			"Become infinite"
		],
		a: "Decrease because there is greater resistance",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "A key advantage of parallel circuits in homes is that:",
		options: [
			"If one appliance breaks the others can still work",
			"Current is always smaller than in series",
			"You cannot add extra appliances"
		],
		a: "If one appliance breaks the others can still work",
		source: "Current in Series and Parallel circuits"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Metals conduct electricity well because they have:",
		options: [
			"A sea of free outer electrons",
			"No charged particles",
			"Only neutrons"
		],
		a: "A sea of free outer electrons",
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Materials that do not allow electricity to pass easily are called:",
		options: [
			"Conductors",
			"Insulators",
			"Ammeter"
		],
		a: "Insulators",
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "Electrons leave the battery from the:",
		options: [
			"Positive terminal",
			"Negative terminal",
			"Switch only"
		],
		a: "Negative terminal",
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "A bulb will not light unless the circuit is:",
		options: [
			"Open",
			"Closed (complete)",
			"Made of wood"
		],
		a: "Closed (complete)",
		source: "Circuit Inquiry / PHET"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "If voltage is kept constant and resistance increases, current:",
		options: [
			"Increases",
			"Decreases",
			"Stays the same"
		],
		a: "Decreases",
		source: "Circuit Inquiry"
	},
	{
		cat: "electricity",
		type: "text",
		q: "What is the unit of resistance?",
		a: [
			"ohms",
			"ohm",
			"Ω"
		],
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "electricity",
		type: "mcq",
		q: "The job of a battery in a simple circuit is to convert:",
		options: [
			"Light energy into chemical energy",
			"Chemical energy into electrical energy",
			"Sound energy into nuclear energy"
		],
		a: "Chemical energy into electrical energy",
		source: "Year 9 Electricity 2025"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Isotopes of an element have the same number of protons but different numbers of:",
		options: [
			"Electrons in every case",
			"Neutrons",
			"Nuclei"
		],
		a: "Neutrons",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "text",
		q: "Mass number A equals atomic number Z plus which other number?",
		a: [
			"neutron number",
			"number of neutrons",
			"N"
		],
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "How many neutrons are in chlorine-35 (atomic number 17)?",
		options: [
			"17",
			"18",
			"35"
		],
		a: "18",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "How many neutrons are in chlorine-37 (atomic number 17)?",
		options: [
			"17",
			"20",
			"37"
		],
		a: "20",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "A nucleus may be unstable if it has:",
		options: [
			"The right balance of protons and neutrons and is not too big",
			"Too many neutrons, too many protons, or is too heavy",
			"No electrons"
		],
		a: "Too many neutrons, too many protons, or is too heavy",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "An alpha particle is:",
		options: [
			"A high-energy electron",
			"A helium nucleus (2 protons and 2 neutrons)",
			"An electromagnetic wave"
		],
		a: "A helium nucleus (2 protons and 2 neutrons)",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "In alpha decay, the mass number of the nucleus decreases by:",
		options: [
			"1",
			"2",
			"4"
		],
		a: "4",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "In alpha decay, the atomic number decreases by:",
		options: [
			"1",
			"2",
			"4"
		],
		a: "2",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "In beta decay, a neutron changes into a proton and:",
		options: [
			"An alpha particle",
			"A high-energy electron (beta particle)",
			"A helium nucleus"
		],
		a: "A high-energy electron (beta particle)",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "In beta decay the mass number:",
		options: [
			"Decreases by 4",
			"Stays the same",
			"Increases by 1"
		],
		a: "Stays the same",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "In beta decay the atomic number:",
		options: [
			"Increases by 1",
			"Decreases by 2",
			"Stays the same"
		],
		a: "Increases by 1",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Gamma emission from a nucleus:",
		options: [
			"Changes A and Z",
			"Releases energy but the nucleus stays the same element",
			"Removes two protons"
		],
		a: "Releases energy but the nucleus stays the same element",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Alpha radiation is stopped by:",
		options: [
			"Thick lead only",
			"Paper or skin",
			"Nothing — it always passes through"
		],
		a: "Paper or skin",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Beta radiation is stopped by:",
		options: [
			"A sheet of paper",
			"Thin aluminium",
			"A few centimetres of air only, never metal"
		],
		a: "Thin aluminium",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Gamma radiation is reduced by:",
		options: [
			"Paper",
			"Thick lead or concrete",
			"A thin mica window only"
		],
		a: "Thick lead or concrete",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Inside the body, which radiation is the most ionising and can do the most damage?",
		options: [
			"Alpha",
			"Beta",
			"Gamma"
		],
		a: "Alpha",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Outside the body, which is generally the most dangerous because it is the most penetrating?",
		options: [
			"Alpha",
			"Beta",
			"Gamma"
		],
		a: "Gamma",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Half-life is the time taken for:",
		options: [
			"All nuclei to decay",
			"The number of radioactive nuclei (or count rate) to fall by 50%",
			"The temperature to halve"
		],
		a: "The number of radioactive nuclei (or count rate) to fall by 50%",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "A radioisotope has a half-life of 14 days and starts at 1080 Bq. What is the count rate after 4 weeks?",
		options: [
			"540 Bq",
			"270 Bq",
			"135 Bq"
		],
		a: "270 Bq",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "After 4 half-lives, what fraction of a radioactive sample remains?",
		options: [
			"1/4",
			"1/8",
			"1/16"
		],
		a: "1/16",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Carbon-14 dating works because living things stop taking in carbon when they die, and C-14 then decays with a half-life of about:",
		options: [
			"22 minutes",
			"5730 years",
			"4.5 billion years"
		],
		a: "5730 years",
		source: "Radioactivity presentation"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Smoke detectors often contain americium-241, which is useful because it is:",
		options: [
			"A short-lived gamma source",
			"An alpha emitter with a long half-life",
			"A beta source stopped by paper mills"
		],
		a: "An alpha emitter with a long half-life",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Paper-mill thickness control often uses beta radiation because:",
		options: [
			"Beta can pass through paper and the count rate changes with thickness",
			"Alpha always goes through steel rollers",
			"Gamma is stopped by a single sheet of paper"
		],
		a: "Beta can pass through paper and the count rate changes with thickness",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "A medical tracer is a radioisotope used so that:",
		options: [
			"Its path through the body can be followed by detecting emitted radiation",
			"It permanently replaces all body carbon",
			"It stops all cell division immediately"
		],
		a: "Its path through the body can be followed by detecting emitted radiation",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Activity of a radioactive source is measured in:",
		options: [
			"Volts",
			"Becquerels (Bq)",
			"Hertz only"
		],
		a: "Becquerels (Bq)",
		source: "Radioactive decay worksheet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "1 Bq equals:",
		options: [
			"1 decay per second",
			"1 decay per hour",
			"1 joule"
		],
		a: "1 decay per second",
		source: "Radioactive decay worksheet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Relative atomic mass is the average mass of an element's isotopes, taking into account:",
		options: [
			"Colour",
			"Abundance of each isotope",
			"Only the heaviest isotope"
		],
		a: "Abundance of each isotope",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "An element has isotopes of mass 10 (20%) and 11 (80%). RAM to 1 d.p. is:",
		options: [
			"10.2",
			"10.8",
			"11.0"
		],
		a: "10.8",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "Radioactive decay is unpredictable for a single nucleus, which is why Geiger counter clicks:",
		options: [
			"Are perfectly evenly spaced",
			"Occur at random times",
			"Never happen outdoors"
		],
		a: "Occur at random times",
		source: "Year 9 Radioactivity Booklet"
	},
	{
		cat: "radioactivity",
		type: "mcq",
		q: "The SHE radioactivity task asks you to discuss a use of nuclear technology including:",
		options: [
			"Only weapon design",
			"Advantages, disadvantages and a bibliography",
			"Only jokes about radiation"
		],
		a: "Advantages, disadvantages and a bibliography",
		source: "Radioactivity SHE Task 2025"
	}
];
var qBank = [...existingQuestions, ...extraQuestions];
function questionsFor(topic) {
	if (topic === "all") return qBank;
	return qBank.filter((q) => q.cat === topic);
}
function WeakSpot() {
	const weak = (0, import_react.useMemo)(() => {
		const stats = loadQuestionStats();
		const ranked = qBank.map((q) => {
			const s = stats[q.q];
			return {
				q,
				rate: s && s.t > 0 ? s.c / s.t : null,
				t: s?.t ?? 0
			};
		}).filter((x) => x.t > 0 && (x.rate ?? 1) < .75).sort((a, b) => (a.rate ?? 0) - (b.rate ?? 0) || b.t - a.t);
		const unseen = qBank.filter((q) => !stats[q.q] || stats[q.q].t === 0);
		return shuffle([...ranked.map((r) => r.q), ...shuffle(unseen).slice(0, 6)]).slice(0, 10);
	}, []);
	const [items, setItems] = (0, import_react.useState)(weak);
	const [i, setI] = (0, import_react.useState)(0);
	const [typed, setTyped] = (0, import_react.useState)("");
	const [choice, setChoice] = (0, import_react.useState)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [score, setScore] = (0, import_react.useState)(0);
	const current = items[i];
	const finished = items.length > 0 && i >= items.length;
	function mark(answer) {
		if (!current || revealed) return;
		const ok = answersMatch(answer, current.a);
		setRevealed(true);
		if (ok) setScore((s) => s + 1);
		saveQuizResults([{
			cat: current.cat,
			q: current.q,
			correct: ok
		}]);
	}
	function next() {
		setI((n) => n + 1);
		setTyped("");
		setChoice(null);
		setRevealed(false);
	}
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "No weak spots yet. Sit a quiz or a game first — StudyMate will pull the questions you miss into this drill."
	});
	if (finished) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm",
		children: [
			score,
			" / ",
			items.length,
			" on your weakest mix."
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "action",
		className: "mt-4",
		onClick: () => {
			setItems(shuffle(weak));
			setI(0);
			setScore(0);
			setRevealed(false);
		},
		children: "Drill again"
	})] });
	const accepted = Array.isArray(current.a) ? current.a[0] : current.a;
	const ok = revealed && answersMatch(choice || typed, current.a);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs font-semibold uppercase tracking-wide text-primary",
			children: [
				i + 1,
				" / ",
				items.length,
				" · ",
				catNames[current.cat] ?? current.cat
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-lg font-semibold",
			children: current.q
		}),
		current.type === "mcq" && current.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-2",
			children: current.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full justify-start",
				variant: revealed && opt === accepted ? "action" : "outline",
				onClick: () => {
					setChoice(opt);
					mark(opt);
				},
				children: opt
			}, opt))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "h-11 min-w-48 flex-1 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
				value: typed,
				onChange: (e) => setTyped(e.target.value),
				disabled: revealed,
				placeholder: "Type the answer"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "action",
				onClick: () => mark(typed),
				disabled: revealed,
				children: "Check"
			})]
		}),
		revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-sm font-semibold ${ok ? "text-success" : "text-danger"}`,
				children: ok ? "Correct" : `Accepted: ${accepted}`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				variant: "action",
				onClick: next,
				children: "Next"
			})]
		})
	] });
}
var GAMES = [
	{
		id: "weak",
		title: "Weak-spot drill",
		blurb: "Questions you miss, plus ones you have not tried.",
		icon: Crosshair
	},
	{
		id: "match",
		title: "Term match",
		blurb: "Pair definitions until the language is automatic.",
		icon: Layers
	},
	{
		id: "spectrum",
		title: "Spectrum order",
		blurb: "Radio to gamma. The sequence that always appears in exams.",
		icon: Sparkles
	},
	{
		id: "blitz",
		title: "Formula blitz",
		blurb: "GPE, KE, work and efficiency — numbers until they stick.",
		icon: Zap
	},
	{
		id: "radiation",
		title: "Radiation rush",
		blurb: "Alpha, beta or gamma from a property. No hesitation.",
		icon: Radiation
	},
	{
		id: "flash",
		title: "Flashcards",
		blurb: "Think, then reveal. Same bank as the quizzes.",
		icon: Brain
	},
	{
		id: "sprint",
		title: "60-second sprint",
		blurb: "As many multiple-choice as you can. Build speed.",
		icon: Clock
	}
];
function GamesPanel({ initialGame = null }) {
	const [game, setGame] = (0, import_react.useState)(initialGame);
	const active = GAMES.find((g) => g.id === game);
	if (!active) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
		kicker: "Practice",
		title: "Study games",
		description: "Short loops that put the Year 9 packs into muscle memory. Weak-spot drill first if you have already sat a quiz."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: GAMES.map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setGame(item.id),
				className: "rounded-[var(--radius-md)] border border-border bg-bg p-5 text-left transition-colors hover:border-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-lg font-bold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: item.blurb
					})
				]
			}, item.id);
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "mb-4 px-2",
			onClick: () => setGame(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All games"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
			title: active.title,
			description: active.blurb
		}),
		game === "flash" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flashcards, {}),
		game === "sprint" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeedRound, {}),
		game === "match" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchGame, {}),
		game === "spectrum" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpectrumSort, {}),
		game === "blitz" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlitz, {}),
		game === "radiation" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadiationRush, {}),
		game === "weak" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeakSpot, {})
	] });
}
function Flashcards() {
	const [topic, setTopic] = (0, import_react.useState)("all");
	const [cards, setCards] = (0, import_react.useState)([]);
	const [i, setI] = (0, import_react.useState)(0);
	const [show, setShow] = (0, import_react.useState)(false);
	function start() {
		setCards(shuffle(questionsFor(topic)).slice(0, 15));
		setI(0);
		setShow(false);
	}
	const card = cards[i];
	const answer = card ? Array.isArray(card.a) ? card.a[0] : card.a : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "h-11 flex-1 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
			value: topic,
			onChange: (e) => setTopic(e.target.value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "all",
				children: "All topics"
			}), TOPIC_ORDER.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: id,
				children: catNames[id]
			}, id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "action",
			onClick: start,
			children: "Deal pack"
		})]
	}), card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setShow((s) => !s),
		className: "mt-4 flex min-h-[200px] w-full flex-col items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg px-6 py-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs font-bold uppercase tracking-wider text-primary",
				children: [
					show ? "Answer" : "Question",
					" · ",
					i + 1,
					"/",
					cards.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-3 text-lg font-bold",
				children: show ? answer : card.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-3 text-sm text-secondary",
				children: show ? "Hide" : "Reveal"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => {
				setI((i - 1 + cards.length) % cards.length);
				setShow(false);
			},
			children: "Previous"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "ml-auto",
			onClick: () => {
				setI((i + 1) % cards.length);
				setShow(false);
			},
			children: "Next"
		})]
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 text-sm text-muted",
		children: "Deal a pack of up to 15 cards from the question bank."
	})] });
}
function SpeedRound() {
	const [time, setTime] = (0, import_react.useState)(60);
	const [score, setScore] = (0, import_react.useState)(0);
	const [streak, setStreak] = (0, import_react.useState)(0);
	const [active, setActive] = (0, import_react.useState)(false);
	const [pool, setPool] = (0, import_react.useState)([]);
	const [current, setCurrent] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const id = window.setInterval(() => {
			setTime((t) => {
				if (t <= 1) {
					setActive(false);
					return 0;
				}
				return t - 1;
			});
		}, 1e3);
		return () => window.clearInterval(id);
	}, [active]);
	function deal(from) {
		const next = from[from.length - 1];
		const rest = from.slice(0, -1);
		setCurrent(next ?? null);
		setPool(rest.length ? rest : shuffle(questionsFor("all").filter((q) => q.type === "mcq")));
	}
	function start() {
		setTime(60);
		setScore(0);
		setStreak(0);
		setActive(true);
		deal(shuffle(questionsFor("all").filter((q) => q.type === "mcq")));
	}
	function answer(opt) {
		if (!active || !current) return;
		if (opt === (Array.isArray(current.a) ? current.a[0] : current.a)) {
			setScore((s) => s + 1);
			setStreak((s) => s + 1);
		} else setStreak(0);
		window.setTimeout(() => deal(pool), 160);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
					label: "Time",
					value: String(time)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
					label: "Score",
					value: String(score)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat$1, {
					label: "Streak",
					value: String(streak)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "action",
			className: "mt-4",
			onClick: start,
			children: "Start 60-second round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: active && current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-h-16 text-base font-bold",
				children: current.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: (current.options ?? []).map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full justify-start",
					onClick: () => answer(opt),
					children: opt
				}, opt))
			})] }) : !active && time === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-[var(--radius-sm)] border border-success/40 bg-success/10 p-3 text-success",
				children: ["Time. Final score: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: score })]
			}) : null
		})
	] });
}
function Stat$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-[var(--radius-sm)] bg-bg px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-mono tabular-nums",
			children: value
		})]
	});
}
var R = 6;
function CircuitLab() {
	const [mode, setMode] = (0, import_react.useState)("series");
	const [bulbs, setBulbs] = (0, import_react.useState)(2);
	const [volts, setVolts] = (0, import_react.useState)(12);
	const n = bulbs;
	const result = (0, import_react.useMemo)(() => {
		if (mode === "series") {
			const totalR = n * R;
			const I = volts / totalR;
			return {
				I,
				Ibranch: Array.from({ length: n }, () => I),
				Vbulb: Array.from({ length: n }, () => I * R),
				totalR
			};
		}
		const Ibranch = volts / R;
		return {
			I: Ibranch * n,
			Ibranch: Array.from({ length: n }, () => Ibranch),
			Vbulb: Array.from({ length: n }, () => volts),
			totalR: R / n
		};
	}, [
		mode,
		n,
		volts
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Each lamp is modelled as 6 Ω. Watch how current and voltage split when you change the layout."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: ["series", "parallel"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMode(m),
				className: cn("h-10 rounded-full border px-4 text-xs font-semibold capitalize", mode === m ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted"),
				children: m
			}, m))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 block text-xs font-semibold text-muted",
			children: [
				"Battery ",
				volts,
				" V",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 3,
					max: 24,
					value: volts,
					onChange: (e) => setVolts(Number(e.target.value)),
					className: "mt-2 w-full accent-primary"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 block text-xs font-semibold text-muted",
			children: [
				"Lamps ",
				n,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1,
					max: 4,
					value: n,
					onChange: (e) => setBulbs(Number(e.target.value)),
					className: "mt-2 w-full accent-primary"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 420 220",
			className: "mt-4 w-full rounded-[var(--radius-md)] border border-border bg-bg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "28",
					y: "88",
					width: "22",
					height: "44",
					className: "fill-surface-hover stroke-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "39",
					y: "80",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "10",
					children: [volts, " V"]
				}),
				mode === "series" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesSvg, {
					n,
					glow: result.I
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallelSvg, {
					n,
					glow: result.Ibranch[0] ?? 0
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-2 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$2, {
					label: "Supply current",
					value: `${result.I.toFixed(2)} A`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$2, {
					label: "Voltage on each lamp",
					value: `${result.Vbulb[0]?.toFixed(2)} V`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$2, {
					label: "Total resistance",
					value: `${result.totalR.toFixed(2)} Ω`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: mode === "series" ? "Series: one path, so current is the same everywhere and the battery voltage is shared." : "Parallel: each branch gets the full battery voltage. Current splits, then adds back at the supply."
		})
	] });
}
function SeriesSvg({ n, glow }) {
	const start = 70;
	const gap = 310 / (n + 1);
	const opacity = Math.min(1, glow / 1.2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M50 110 H380 V150 H50 Z",
		fill: "none",
		stroke: "var(--color-primary)",
		strokeWidth: "2.5"
	}), Array.from({ length: n }).map((_, i) => {
		const x = start + gap * (i + 1);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
			x,
			y: 110,
			on: opacity,
			label: `L${i + 1}`
		}, i);
	})] });
}
function ParallelSvg({ n, glow }) {
	const top = 56;
	const bot = 164;
	const span = 108;
	const opacity = Math.min(1, glow / 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M50 110 H90",
			fill: "none",
			stroke: "var(--color-primary)",
			strokeWidth: "2.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M370 110 H390 V150 H50 V110",
			fill: "none",
			stroke: "var(--color-primary)",
			strokeWidth: "2.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "90",
			y1: top,
			x2: "90",
			y2: bot,
			stroke: "var(--color-primary)",
			strokeWidth: "2.5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "370",
			y1: top,
			x2: "370",
			y2: bot,
			stroke: "var(--color-primary)",
			strokeWidth: "2.5"
		}),
		Array.from({ length: n }).map((_, i) => {
			const y = n === 1 ? 110 : top + span * i / (n - 1);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "90",
				y1: y,
				x2: "370",
				y2: y,
				stroke: "var(--color-primary)",
				strokeWidth: "2.5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lamp, {
				x: 230,
				y,
				on: opacity,
				label: `L${i + 1}`
			})] }, i);
		})
	] });
}
function Lamp({ x, y, on, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: x,
		cy: y,
		r: "12",
		fill: `color-mix(in oklab, var(--color-warning) ${Math.round(on * 80)}%, var(--color-surface))`,
		stroke: "var(--color-warning)",
		strokeWidth: "2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x,
		y: y + 28,
		textAnchor: "middle",
		className: "fill-muted",
		fontSize: "10",
		children: label
	})] });
}
function Fact$2({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-lg font-bold tabular-nums text-primary",
			children: value
		})]
	});
}
var N = 64;
function seedAtoms() {
	return Array.from({ length: N }, () => true);
}
function DecayLab() {
	const [atoms, setAtoms] = (0, import_react.useState)(() => seedAtoms());
	const [steps, setSteps] = (0, import_react.useState)(0);
	const [half, setHalf] = (0, import_react.useState)(5730);
	const remaining = atoms.filter(Boolean).length;
	const expected = (0, import_react.useMemo)(() => N * Math.pow(.5, steps), [steps]);
	function step() {
		setAtoms((prev) => prev.map((alive) => alive ? Math.random() >= .5 : false));
		setSteps((s) => s + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Each nucleus has a 50% chance of decaying each half-life. You cannot predict which atom, only the fraction left."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid grid-cols-8 gap-1.5 rounded-[var(--radius-md)] border border-border bg-bg p-3",
			children: atoms.map((alive, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `aspect-square rounded-full ${alive ? "bg-primary" : "bg-surface-hover"}`,
				title: alive ? "Undecayed" : "Decayed"
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-2 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$1, {
					label: "Half-lives passed",
					value: String(steps)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$1, {
					label: "Nuclei left",
					value: `${remaining} / ${N}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$1, {
					label: "Expected remaining",
					value: expected.toFixed(1)
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 block text-xs font-semibold text-muted",
			children: ["Half-life (years, carbon-14 is 5730)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm sm:max-w-xs",
				value: half,
				onChange: (e) => setHalf(Number(e.target.value) || 0)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted",
			children: [
				"Elapsed time ≈ ",
				steps * half,
				" years. Remaining ≈ initial × (1/2)",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "n" }),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "action",
				onClick: step,
				children: "Advance one half-life"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => {
					setAtoms(seedAtoms());
					setSteps(0);
				},
				children: "Reset sample"
			})]
		})
	] });
}
function Fact$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-lg font-bold tabular-nums text-primary",
			children: value
		})]
	});
}
var MODES = [
	{
		id: "spectrum",
		label: "Spectrum"
	},
	{
		id: "reflection",
		label: "Reflection"
	},
	{
		id: "refraction",
		label: "Refraction"
	},
	{
		id: "colour",
		label: "Colour"
	}
];
var BANDS = [
	{
		id: "radio",
		label: "Radio",
		cls: "bg-em-radio",
		uses: "Longest wavelength. Radio, TV, some mobiles. Passes through the body with little absorption."
	},
	{
		id: "micro",
		label: "Microwave",
		cls: "bg-em-micro",
		uses: "Heat food by vibrating water molecules. Radar and satellite links. Short beams diffract very little."
	},
	{
		id: "ir",
		label: "Infrared",
		cls: "bg-em-ir",
		uses: "Heat, remotes, thermal cameras. All objects emit IR — hotter objects emit more."
	},
	{
		id: "vis",
		label: "Visible",
		cls: "bg-[linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#8b5cf6)]",
		uses: "The only EM radiation human eyes detect (~390–780 nm). Red sits next to IR; violet next to UV."
	},
	{
		id: "uv",
		label: "UV",
		cls: "bg-em-uv",
		uses: "Vitamin D, fluorescence, security inks. Overexposure: sunburn, ageing, skin cancer."
	},
	{
		id: "x",
		label: "X-ray",
		cls: "bg-em-x",
		uses: "Bone and security imaging from an X-ray tube. Lead shielding for radiographers."
	},
	{
		id: "gamma",
		label: "Gamma",
		cls: "bg-em-gamma",
		uses: "From radioactive nuclei. Tracers, sterilising, radiotherapy. Shortest λ, highest energy."
	}
];
var MEDIA = [
	{
		id: "air",
		n: 1,
		label: "Air 1.00"
	},
	{
		id: "water",
		n: 1.33,
		label: "Water 1.33"
	},
	{
		id: "glass",
		n: 1.5,
		label: "Glass 1.50"
	},
	{
		id: "diamond",
		n: 2.42,
		label: "Diamond 2.42"
	}
];
function LightLab({ initial = "spectrum" }) {
	const [mode, setMode] = (0, import_react.useState)(initial);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMode(m.id),
				className: cn("h-10 rounded-full border px-4 text-xs font-semibold", mode === m.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted hover:text-foreground"),
				children: m.label
			}, m.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fade-in mt-5",
			children: [
				mode === "spectrum" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpectrumBench, {}),
				mode === "reflection" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReflectionBench, {}),
				mode === "refraction" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefractionBench, {}),
				mode === "colour" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColourBench, {})
			]
		})]
	});
}
function SpectrumBench() {
	const [id, setId] = (0, import_react.useState)("vis");
	const [nm, setNm] = (0, import_react.useState)(550);
	const band = BANDS.find((b) => b.id === id);
	const rgb = wavelengthToCss(nm);
	const period = 10 + (nm - 380) / 18;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Tap a band. Energy and hazard increase to the right. Drag the visible-light slider to see wavelength, colour and wave shape."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex overflow-hidden rounded-[var(--radius-md)] border border-border",
			children: BANDS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setId(b.id),
				className: cn("h-16 min-w-0 flex-1 px-1 text-[10px] font-bold text-foreground sm:text-xs", b.cls, id === b.id && "ring-2 ring-inset ring-foreground"),
				children: b.label
			}, b.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex justify-between text-[10px] uppercase tracking-wide text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Long λ · low f · lower energy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Short λ · high f · higher energy" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 rounded-[var(--radius-sm)] border border-border bg-bg p-4 text-sm",
			children: band.uses
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-[var(--radius-md)] border border-border bg-bg p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Visible wavelength"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm tabular-nums text-primary",
						children: [nm, " nm"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 390,
					max: 700,
					value: nm,
					onChange: (e) => {
						const v = Number(e.target.value);
						setNm(v);
						setId("vis");
					},
					className: "mt-3 w-full accent-primary",
					"aria-label": "Visible wavelength in nanometres"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 overflow-hidden rounded-[var(--radius-sm)] border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 420 80",
						className: "h-24 w-full",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "420",
							height: "80",
							className: "fill-surface"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "wave-drift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WavePath, {
								period,
								color: rgb
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								transform: "translate(48,0)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WavePath, {
									period,
									color: rgb
								})
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Red photons have less energy than violet. In a prism, red is bent least and violet most — that is dispersion."
				})
			]
		})
	] });
}
function WavePath({ period, color }) {
	const d = (0, import_react.useMemo)(() => {
		const pts = [];
		for (let x = 0; x <= 468; x += 2) {
			const y = 40 + 26 * Math.sin(x / period * Math.PI * 2);
			pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(2)}`);
		}
		return pts.join(" ");
	}, [period]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d,
		fill: "none",
		stroke: color,
		strokeWidth: "2.4",
		strokeLinecap: "round"
	});
}
function ReflectionBench() {
	const [iDeg, setIDeg] = (0, import_react.useState)(42);
	const i = iDeg * Math.PI / 180;
	const ox = 200;
	const oy = 188;
	const len = 150;
	const ix = ox - Math.sin(i) * len;
	const iy = oy - Math.cos(i) * len;
	const rx = ox + Math.sin(i) * len;
	const ry = oy - Math.cos(i) * len;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Angles are measured from the normal, not the mirror. Drag the slider — i always equals r."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 240",
			className: "mt-3 w-full overflow-visible rounded-[var(--radius-md)] border border-border bg-bg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "24",
					y: "188",
					width: "352",
					height: "10",
					rx: "2",
					className: "fill-surface-hover stroke-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "200",
					y: "228",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "11",
					children: "Plane mirror"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "200",
					y1: "36",
					x2: "200",
					y2: "188",
					className: "stroke-muted",
					strokeDasharray: "4 5",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "208",
					y: "50",
					className: "fill-muted",
					fontSize: "11",
					children: "Normal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: ix,
					y1: iy,
					x2: ox,
					y2: oy,
					stroke: "var(--color-primary)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: arrowHead(ix, iy, ox, oy),
					fill: "var(--color-primary)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: ox,
					y1: oy,
					x2: rx,
					y2: ry,
					stroke: "var(--color-secondary)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: arrowHead(ox, oy, rx, ry),
					fill: "var(--color-secondary)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arc, {
					cx: ox,
					cy: oy,
					r: 42,
					start: -Math.PI / 2,
					sweep: -i,
					color: "var(--color-primary)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arc, {
					cx: ox,
					cy: oy,
					r: 42,
					start: -Math.PI / 2,
					sweep: i,
					color: "var(--color-secondary)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: 142,
					y: 130,
					fill: "var(--color-primary)",
					fontSize: "13",
					fontWeight: "700",
					children: [
						"i ",
						iDeg,
						"°"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: 228,
					y: 130,
					fill: "var(--color-secondary)",
					fontSize: "13",
					fontWeight: "700",
					children: [
						"r ",
						iDeg,
						"°"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 block text-xs font-semibold text-muted",
			children: ["Angle of incidence", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 8,
				max: 80,
				value: iDeg,
				onChange: (e) => setIDeg(Number(e.target.value)),
				className: "mt-2 w-full accent-primary"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 font-mono text-sm text-primary",
			children: [
				"i = r = ",
				iDeg,
				"°"
			]
		})
	] });
}
function RefractionBench() {
	const [from, setFrom] = (0, import_react.useState)("air");
	const [to, setTo] = (0, import_react.useState)("glass");
	const [iDeg, setIDeg] = (0, import_react.useState)(35);
	const n1 = MEDIA.find((m) => m.id === from).n;
	const n2 = MEDIA.find((m) => m.id === to).n;
	const i = iDeg * Math.PI / 180;
	const arg = n1 / n2 * Math.sin(i);
	const tir = arg > 1;
	const r = tir ? i : Math.asin(Math.min(1, arg));
	const rDeg = Math.round(r * 180 / Math.PI);
	const crit = n1 > n2 ? Math.round(Math.asin(n2 / n1) * 180 / Math.PI) : null;
	const ox = 200;
	const oy = 120;
	const len = 108;
	const ix = ox - Math.sin(i) * len;
	const iy = oy - Math.cos(i) * len;
	const tx = tir ? ox + Math.sin(i) * len : ox + Math.sin(r) * len;
	const ty = tir ? oy - Math.cos(i) * len : oy + Math.cos(r) * len;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Light bends towards the normal when it slows (into a denser medium) and away when it speeds up."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-2 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				label: "From",
				value: from,
				onChange: setFrom
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
				label: "Into",
				value: to,
				onChange: setTo
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 400 240",
			className: "mt-3 w-full rounded-[var(--radius-md)] border border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "400",
					height: "120",
					className: "fill-surface"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "120",
					width: "400",
					height: "120",
					className: "fill-surface-hover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "12",
					y: "20",
					className: "fill-muted",
					fontSize: "11",
					children: ["n = ", n1.toFixed(2)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "12",
					y: "228",
					className: "fill-muted",
					fontSize: "11",
					children: ["n = ", n2.toFixed(2)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "200",
					y1: "16",
					x2: "200",
					y2: "224",
					className: "stroke-muted",
					strokeDasharray: "4 5",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: ix,
					y1: iy,
					x2: ox,
					y2: oy,
					stroke: "var(--color-primary)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: ox,
					y1: oy,
					x2: tx,
					y2: ty,
					stroke: tir ? "var(--color-warning)" : "var(--color-secondary)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "208",
					y: "36",
					className: "fill-muted",
					fontSize: "11",
					children: "Normal"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 block text-xs font-semibold text-muted",
			children: [
				"Angle of incidence ",
				iDeg,
				"°",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 1,
					max: 85,
					value: iDeg,
					onChange: (e) => setIDeg(Number(e.target.value)),
					className: "mt-2 w-full accent-primary"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-2 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					label: "i",
					value: `${iDeg}°`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					label: tir ? "TIR" : "r",
					value: tir ? "reflects" : `${rDeg}°`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
					label: "Critical angle",
					value: crit === null ? "n/a (n1 ≤ n2)" : `${crit}°`
				})
			]
		}),
		tir ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 rounded-[var(--radius-sm)] border border-warning/40 bg-warning/10 px-4 py-3 text-sm text-warning",
			children: "Total internal reflection — i is greater than the critical angle, so the ray cannot leave the denser medium."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "Snell: n₁ sin i = n₂ sin r. Optical fibres and periscope prisms use TIR."
		})
	] });
}
function ColourBench() {
	const [r, setR] = (0, import_react.useState)(255);
	const [g, setG] = (0, import_react.useState)(0);
	const [b, setB] = (0, import_react.useState)(0);
	const [reflects, setReflects] = (0, import_react.useState)({
		r: true,
		g: false,
		b: false
	});
	const mix = `rgb(${r} ${g} ${b})`;
	const object = `rgb(${reflects.r ? 220 : 18} ${reflects.g ? 220 : 18} ${reflects.b ? 220 : 18})`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[var(--radius-md)] border border-border bg-bg p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Additive mixing (lights)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Red + green + blue lights make white. This is how screens work."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-28 rounded-[var(--radius-sm)] border border-border",
					style: { background: mix }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Red",
					value: r,
					onChange: setR
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Green",
					value: g,
					onChange: setG
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					label: "Blue",
					value: b,
					onChange: setB
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						{
							label: "Yellow",
							rr: 255,
							gg: 255,
							bb: 0
						},
						{
							label: "Cyan",
							rr: 0,
							gg: 255,
							bb: 255
						},
						{
							label: "Magenta",
							rr: 255,
							gg: 0,
							bb: 255
						},
						{
							label: "White",
							rr: 255,
							gg: 255,
							bb: 255
						}
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-9 rounded-full border border-border px-3 text-xs font-semibold hover:border-primary",
						onClick: () => {
							setR(p.rr);
							setG(p.gg);
							setB(p.bb);
						},
						children: p.label
					}, p.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[var(--radius-md)] border border-border bg-bg p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: "Object colour (white light)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "A red object reflects red and absorbs the rest. Tick the wavelengths this surface reflects."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-28 rounded-[var(--radius-sm)] border border-border",
					style: { background: object }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-2",
					children: [
						"r",
						"g",
						"b"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-11 items-center gap-3 rounded-[var(--radius-sm)] border border-border px-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: reflects[k],
								onChange: () => setReflects((s) => ({
									...s,
									[k]: !s[k]
								})),
								className: "size-4 accent-primary"
							}),
							"Reflects ",
							k === "r" ? "red" : k === "g" ? "green" : "blue"
						]
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "White reflects all three. Black absorbs all three. Filters work by subtracting (absorbing) colours from white light."
				})
			]
		})]
	});
}
function Select({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-xs font-semibold text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm text-foreground",
			value,
			onChange: (e) => onChange(e.target.value),
			children: MEDIA.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: m.id,
				children: m.label
			}, m.id))
		})]
	});
}
function Slider({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-3 block text-xs font-semibold text-muted",
		children: [
			label,
			" ",
			value,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 255,
				value,
				onChange: (e) => onChange(Number(e.target.value)),
				className: "mt-2 w-full accent-primary"
			})
		]
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-lg font-bold tabular-nums text-primary",
			children: value
		})]
	});
}
function Arc({ cx, cy, r, start, sweep, color }) {
	const x1 = cx + r * Math.cos(start);
	const y1 = cy + r * Math.sin(start);
	const x2 = cx + r * Math.cos(start + sweep);
	const y2 = cy + r * Math.sin(start + sweep);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M ${x1} ${y1} A ${r} ${r} 0 ${Math.abs(sweep) > Math.PI ? 1 : 0} ${sweep > 0 ? 1 : 0} ${x2} ${y2}`,
		fill: "none",
		stroke: color,
		strokeWidth: "2"
	});
}
function arrowHead(x1, y1, x2, y2) {
	const angle = Math.atan2(y2 - y1, x2 - x1);
	const s = 8;
	const ax = x2 - Math.cos(angle) * 4;
	const ay = y2 - Math.sin(angle) * 4;
	return `${`${ax + Math.cos(angle + 2.5) * s},${ay + Math.sin(angle + 2.5) * s}`} ${`${x2},${y2}`} ${`${ax + Math.cos(angle - 2.5) * s},${ay + Math.sin(angle - 2.5) * s}`}`;
}
function wavelengthToCss(nm) {
	let r = 0;
	let g = 0;
	let b = 0;
	if (nm >= 380 && nm < 440) {
		r = -(nm - 440) / 60;
		b = 1;
	} else if (nm >= 440 && nm < 490) {
		g = (nm - 440) / 50;
		b = 1;
	} else if (nm >= 490 && nm < 510) {
		g = 1;
		b = -(nm - 510) / 20;
	} else if (nm >= 510 && nm < 580) {
		r = (nm - 510) / 70;
		g = 1;
	} else if (nm >= 580 && nm < 645) {
		r = 1;
		g = -(nm - 645) / 65;
	} else if (nm >= 645 && nm <= 780) r = 1;
	let factor = 1;
	if (nm >= 380 && nm < 420) factor = .3 + .7 * (nm - 380) / 40;
	else if (nm > 700 && nm <= 780) factor = .3 + .7 * (780 - nm) / 80;
	const to = (v) => Math.round(Math.min(1, Math.max(0, v)) * factor * 255);
	return `rgb(${to(r)} ${to(g)} ${to(b)})`;
}
function SankeyLab() {
	const [input, setInput] = (0, import_react.useState)(100);
	const [useful, setUseful] = (0, import_react.useState)(40);
	const waste = Math.max(0, input - useful);
	const eff = input === 0 ? 0 : useful / input * 100;
	const usefulH = (0, import_react.useMemo)(() => input === 0 ? 0 : useful / input * 160, [input, useful]);
	const wasteH = 160 - usefulH;
	function clampUseful(v) {
		setUseful(Math.min(input, Math.max(0, v)));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Arrow width stands for energy. The left bar is input; it splits into useful output and wasted energy."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-4 md:grid-cols-[1fr_180px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 420 220",
			className: "w-full rounded-[var(--radius-md)] border border-border bg-bg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "24",
					y: "30",
					width: "70",
					height: "160",
					rx: "8",
					fill: "var(--color-primary)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "59",
					y: "20",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "11",
					children: [
						"Input ",
						input,
						" J"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M94 30 C 200 30, 220 ${30 + (160 - usefulH) / 2}, 330 ${30 + (160 - usefulH) / 2} L 330 ${30 + (160 - usefulH) / 2 + usefulH} C 220 ${30 + (160 - usefulH) / 2 + usefulH}, 200 190, 94 190 Z`,
					fill: "var(--color-secondary)",
					opacity: "0.9"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "330",
					y: 30 + (160 - usefulH) / 2,
					width: "66",
					height: Math.max(usefulH, 4),
					rx: "8",
					fill: "var(--color-secondary)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "363",
					y: "20",
					textAnchor: "middle",
					className: "fill-muted",
					fontSize: "11",
					children: [
						"Useful ",
						useful,
						" J"
					]
				}),
				waste > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M94 190 C 160 190, 170 206, 230 206 L 230 ${206 + Math.max(wasteH * .2, 8)} C 160 ${206 + Math.max(wasteH * .2, 8)}, 150 190, 94 190 Z`,
					fill: "var(--color-warning)",
					opacity: "0.85"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: "250",
					y: "214",
					className: "fill-warning",
					fontSize: "11",
					children: [
						"Waste ",
						waste,
						" J"
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 content-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-xs font-semibold text-muted",
					children: ["Input energy (J)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm",
						value: input,
						inputMode: "numeric",
						onChange: (e) => {
							const v = Number(e.target.value) || 0;
							setInput(v);
							if (useful > v) setUseful(v);
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-xs font-semibold text-muted",
					children: ["Useful energy (J)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm",
						value: useful,
						inputMode: "numeric",
						onChange: (e) => clampUseful(Number(e.target.value) || 0)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wide text-muted",
						children: "Efficiency"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-2xl font-bold tabular-nums text-primary",
						children: [eff.toFixed(1), "%"]
					})]
				})
			]
		})]
	})] });
}
function EnergyTools({ mode = "all" }) {
	const [mass, setMass] = (0, import_react.useState)("5");
	const [height, setHeight] = (0, import_react.useState)("2");
	const [g, setG] = (0, import_react.useState)("10");
	const [speed, setSpeed] = (0, import_react.useState)("4");
	const [force, setForce] = (0, import_react.useState)("1000");
	const [dist, setDist] = (0, import_react.useState)("50");
	const [useful, setUseful] = (0, import_react.useState)("10");
	const [input, setInput] = (0, import_react.useState)("100");
	const gpe = (0, import_react.useMemo)(() => n(mass) * n(g) * n(height), [
		mass,
		g,
		height
	]);
	const ke = (0, import_react.useMemo)(() => .5 * n(mass) * n(speed) ** 2, [mass, speed]);
	const work = (0, import_react.useMemo)(() => n(force) * n(dist), [force, dist]);
	const eff = (0, import_react.useMemo)(() => n(input) === 0 ? 0 : n(useful) / n(input) * 100, [useful, input]);
	const waste = (0, import_react.useMemo)(() => n(input) - n(useful), [input, useful]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-lg font-bold",
				children: mode === "efficiency" ? "Efficiency calculator" : "Formula calculator"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Numbers match the class worksheets. Use g = 10 unless a question says 9.81."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 md:grid-cols-2",
				children: [(mode === "all" || mode === "efficiency") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					title: "Efficiency",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Useful energy (J)",
							value: useful,
							onChange: setUseful
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Input energy (J)",
							value: input,
							onChange: setInput
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
							label: "Efficiency",
							value: `${eff.toFixed(1)}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
							label: "Wasted",
							value: `${waste} J`
						})
					]
				}), mode === "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "GPE = mgh",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mass (kg)",
								value: mass,
								onChange: setMass
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "g (N/kg)",
								value: g,
								onChange: setG
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Height (m)",
								value: height,
								onChange: setHeight
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Ep",
								value: `${gpe.toFixed(2)} J`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "KE = ½mv²",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mass (kg)",
								value: mass,
								onChange: setMass
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Speed (m/s)",
								value: speed,
								onChange: setSpeed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "Ek",
								value: `${ke.toFixed(2)} J`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						title: "Work = F × s",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Force (N)",
								value: force,
								onChange: setForce
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Distance (m)",
								value: dist,
								onChange: setDist
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
								label: "W",
								value: `${work.toFixed(2)} J`
							})
						]
					})
				] })]
			})
		]
	});
}
function n(v) {
	const x = Number(v);
	return Number.isFinite(x) ? x : 0;
}
function Card({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-md)] border border-border bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 font-bold",
			children: title
		}), children]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-2 block text-xs text-muted",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm text-foreground",
			value,
			onChange: (e) => onChange(e.target.value),
			inputMode: "decimal"
		})]
	});
}
function Result({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-muted",
			children: [label, ": "]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono font-bold text-primary",
			children: value
		})]
	});
}
function HalfLifeTool() {
	const [initial, setInitial] = (0, import_react.useState)("100");
	const [half, setHalf] = (0, import_react.useState)("5730");
	const [time, setTime] = (0, import_react.useState)("17190");
	const [unit, setUnit] = (0, import_react.useState)("years");
	const n = (0, import_react.useMemo)(() => {
		const h = Number(half);
		const t = Number(time);
		if (!h || h <= 0) return 0;
		return t / h;
	}, [half, time]);
	const remaining = (0, import_react.useMemo)(() => {
		const start = Number(initial);
		if (!Number.isFinite(start)) return 0;
		return start * Math.pow(.5, n);
	}, [initial, n]);
	const fraction = (0, import_react.useMemo)(() => Math.pow(.5, n), [n]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-lg font-bold",
				children: "Half-life calculator"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"remaining = initial × (1/2)",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "n" }),
					" where n is the number of half-lives."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs text-muted",
						children: ["Starting amount", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground",
							value: initial,
							onChange: (e) => setInitial(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs text-muted",
						children: ["Half-life", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground",
							value: half,
							onChange: (e) => setHalf(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs text-muted",
						children: ["Elapsed time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground",
							value: time,
							onChange: (e) => setTime(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-xs text-muted",
						children: ["Unit (label only)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "mt-1 h-10 w-full rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm text-foreground",
							value: unit,
							onChange: (e) => setUnit(e.target.value)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Half-lives (n)",
						value: n.toFixed(2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Fraction left",
						value: fraction.toPrecision(3)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: `Amount left`,
						value: `${remaining.toPrecision(4)} (${unit})`
					})
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-sm)] border border-border bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-lg font-bold text-primary",
			children: value
		})]
	});
}
var LABS = [
	{
		id: "light",
		title: "Light lab",
		blurb: "Spectrum, reflection, refraction, TIR and colour mixing — the visual bench.",
		icon: Lightbulb
	},
	{
		id: "circuit",
		title: "Circuit bench",
		blurb: "Series vs parallel. See current and voltage split as you add lamps.",
		icon: Zap
	},
	{
		id: "sankey",
		title: "Energy & Sankey",
		blurb: "GPE, KE, work, efficiency and a live Sankey split.",
		icon: Spline
	},
	{
		id: "decay",
		title: "Half-life sample",
		blurb: "Watch 64 nuclei decay. Compare the random sample to the (1/2)^n model.",
		icon: Atom
	}
];
function LabsPanel({ initialLab = null }) {
	const [lab, setLab] = (0, import_react.useState)(initialLab);
	const active = LABS.find((l) => l.id === lab);
	if (!active) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
		kicker: "Interactive",
		title: "Labs",
		description: "Build the picture in your head before the test. Start with the light bench — then circuits, energy and decay."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: LABS.map((item) => {
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setLab(item.id),
				className: "rounded-[var(--radius-md)] border border-border bg-bg p-5 text-left transition-colors hover:border-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-lg font-bold",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: item.blurb
					})
				]
			}, item.id);
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "mb-4 px-2",
			onClick: () => setLab(null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "All labs"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
			title: active.title,
			description: active.blurb
		}),
		lab === "light" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightLab, { initial: "spectrum" }),
		lab === "circuit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitLab, {}),
		lab === "sankey" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyTools, {})]
		}),
		lab === "decay" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecayLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HalfLifeTool, {})]
		})
	] });
}
var noteSections = [
	{
		id: "energy-forms",
		topic: "energy",
		title: "Energy forms and transformations",
		pack: "Energy transfers and transformations",
		sources: [
			"1. Energy_.pptx",
			"1. Energy_NAn.pptx",
			"1a. Energy Forms & Changes (PhET).docx",
			"1b. Energy Skate Park Basics (PhET).docx"
		],
		summary: "Energy is the capacity to do work, measured in joules. It cannot be created or destroyed — only transferred or transformed.",
		blocks: [
			{
				heading: "What energy is",
				body: [
					"Energy is the capacity to do work. Work means a force causing movement through a distance.",
					"Energy is measured in joules (J).",
					"Most energy on Earth can be traced back to the Sun: plants store light as chemical energy, animals eat plants, and fossil fuels formed from ancient living things."
				]
			},
			{
				heading: "Kinetic versus potential",
				body: [
					"Kinetic-type energies involve particles or objects moving: kinetic, thermal (heat), light, electrical and sound.",
					"Potential energies can be stored: gravitational, chemical, elastic and nuclear.",
					"Kinetic energy is the energy of movement: Ek = ½mv².",
					"Gravitational potential energy is due to position in a gravitational field: Ep = mgh.",
					"Elastic potential energy is stored when an object is stretched or compressed.",
					"Chemical energy is stored in chemical bonds (food, fuel, batteries).",
					"Light energy is given out by luminous objects such as the Sun, flames and globes."
				]
			},
			{
				heading: "Conservation of energy",
				body: [
					"1st law of thermodynamics: the total energy of the universe is constant. Energy cannot be created or destroyed; it can only change place or form.",
					"A student in class: chemical energy (food) → kinetic + heat + sound.",
					"A fan: electrical → kinetic (+ heat + sound).",
					"A light globe: electrical → light (+ heat).",
					"A bow: kinetic → elastic potential → kinetic (+ heat + sound)."
				]
			},
			{
				heading: "From the PhET lessons",
				body: [
					"Energy Forms & Changes: turning on Energy Symbols lets you see energy flow from source → generator → output.",
					"Faucet, kettle steam or a cyclist can spin a turbine; sunlight drives solar panels.",
					"A fluorescent bulb wastes less heat than an incandescent bulb — that is why it is more efficient.",
					"Energy Skate Park: on a frictionless track, PE + KE stays constant. PE is highest at the top; KE is highest at the bottom.",
					"Friction turns some mechanical energy into thermal energy, so the skater gradually loses height."
				]
			}
		],
		formulas: [{
			name: "Kinetic energy",
			formula: "Ek = ½mv²",
			note: "m in kg, v in m/s, Ek in J"
		}, {
			name: "Gravitational potential energy",
			formula: "Ep = mgh",
			note: "g ≈ 9.81 N/kg on Earth (worksheets often use 10)"
		}],
		glossary: [
			{
				term: "Energy transformation",
				def: "Energy changing from one form into another."
			},
			{
				term: "Energy transfer",
				def: "Energy moving from one place or object to another."
			},
			{
				term: "Mechanical energy",
				def: "Emech = Ek + Ep"
			}
		]
	},
	{
		id: "energy-sankey",
		topic: "energy",
		title: "Sankey diagrams and efficiency",
		pack: "Sankey Energy Diagrams",
		sources: [
			"2. Sankey Energy Diagrams.pptx",
			"2. Sankey Energy Diagrams KP.pptx",
			"2. Sankey Energy Diagrams Worksheet.docx"
		],
		summary: "Sankey diagrams show how input energy splits into useful and wasted outputs. Arrow width is proportional to energy, because energy is conserved.",
		blocks: [{
			heading: "Reading a Sankey diagram",
			body: [
				"The input arrow on the left is the energy going in (often electrical or chemical).",
				"Arrows continuing to the right are useful energy. Arrows bending down are wasted energy (usually heat and sometimes sound).",
				"The thickness of the input arrow equals the total thickness of the output arrows — law of conservation of energy."
			]
		}, {
			heading: "Efficiency",
			body: [
				"Efficiency = (useful energy ÷ input energy) × 100. It is given as a percentage.",
				"Wasted energy = input energy − useful energy.",
				"A filament lamp: 100 J electrical in, 10 J light out, 90 J heat wasted → 10% efficient.",
				"From the class examples: TV ≈ 51%, hairdryer ≈ 67%, vacuum cleaner ≈ 30%.",
				"More stars on an appliance energy label means it wastes less energy, so it usually costs less to run."
			]
		}],
		formulas: [{
			name: "Efficiency",
			formula: "η = (useful / input) × 100%"
		}, {
			name: "Wasted energy",
			formula: "Ewasted = Einput − Euseful"
		}],
		worked: [{
			q: "A torch uses 100 J of electrical energy to make 10 J of light and 90 J of heat. Sketch the Sankey idea and find efficiency.",
			a: "Input 100 J; useful 10 J light; wasted 90 J heat. Efficiency = 10/100 × 100 = 10%."
		}, {
			q: "A vacuum takes 1440 kJ in and produces 430 kJ motion and 100 kJ sound. Find heating waste and efficiency if motion is useful.",
			a: "Heating = 1440 − 430 − 100 = 910 kJ. Efficiency = 430/1440 × 100 ≈ 30%."
		}]
	},
	{
		id: "energy-work",
		topic: "energy",
		title: "Work, GPE and KE",
		pack: "Mechanical energy and work",
		sources: ["3. Work, GPE & KE (Formulas).pptx", "3. Work, GPE & KE_(questions).docx"],
		summary: "Work is force times displacement in the direction of the force. Doing work stores or transfers energy, including GPE and KE.",
		blocks: [{
			heading: "When is work done?",
			body: [
				"Work is done when a force acts on an object and causes a displacement in the direction of that force. W = F × s.",
				"Units: joules (J) or newton-metres (N m).",
				"Pushing a wall until you are exhausted is not work on the wall — the wall does not move.",
				"A book falling is work: gravity displaces it downwards.",
				"Carrying a tray at constant height across a room is not work on the tray: the upward force is perpendicular to the displacement."
			]
		}, {
			heading: "GPE and KE",
			body: [
				"Ep = mgh. Worksheets often take g = 10 N/kg; the formula slides use 9.81 N/kg.",
				"A 250 g tin lifted 2 m: Ep = 0.250 × 9.81 × 2 ≈ 4.9 J.",
				"Ek = ½mv². Doubling speed quadruples kinetic energy because v is squared.",
				"If air resistance is ignored, GPE lost = KE gained for a falling object."
			]
		}],
		formulas: [
			{
				name: "Work",
				formula: "W = F × s"
			},
			{
				name: "GPE",
				formula: "Ep = mgh"
			},
			{
				name: "KE",
				formula: "Ek = ½mv²"
			},
			{
				name: "Rearrange mass from KE",
				formula: "m = 2Ek / v²"
			},
			{
				name: "Rearrange speed from KE",
				formula: "v = √(2Ek / m)"
			}
		],
		worked: [
			{
				q: "Robert pushes a car 50 m with 1000 N. Work?",
				a: "W = 1000 × 50 = 50 000 J."
			},
			{
				q: "5 kg cat lifted 2 m (g = 10). GPE?",
				a: "Ep = 5 × 10 × 2 = 100 J."
			},
			{
				q: "3 kg cat running at 4 m/s. KE?",
				a: "Ek = ½ × 3 × 16 = 24 J."
			},
			{
				q: "50 kg goat, 450 m cliff, g = 10. Speed just before the ground, ignoring air resistance?",
				a: "Ep = 50 × 10 × 450 = 225 000 J = KE. v = √(2 × 225000 / 50) = √9000 ≈ 95 m/s."
			}
		]
	},
	{
		id: "heat-conduction",
		topic: "heat",
		title: "Heat, temperature and conduction",
		pack: "Heat transfer",
		sources: ["Heat, Temperature and Conduction (existing hub notes)"],
		summary: "Temperature is linked to the average kinetic energy of particles. Heat flows from hotter to cooler matter.",
		blocks: [{
			heading: "Particle model",
			body: [
				"Matter is modelled as tiny particles. Particle motion is linked to kinetic energy.",
				"Changing state changes how particles are arranged and how they move.",
				"Temperature is linked to the average kinetic energy of particles.",
				"Heat (thermal energy transfer) occurs when there is a temperature difference, from hotter to cooler."
			]
		}, {
			heading: "Conduction",
			body: [
				"Conduction transfers thermal energy through direct contact between particles.",
				"Metals conduct well because outer electrons are free to move and transfer energy — the 'sea of electrons'.",
				"Insulators are poor conductors. Trapped air is useful because air is a poor conductor."
			]
		}]
	},
	{
		id: "heat-convection",
		topic: "heat",
		title: "Convection, radiation and insulation",
		pack: "Heat transfer",
		sources: ["Convection + 2026 Insulation Investigation", "Heat Transfer: Radiation"],
		summary: "Convection moves heated fluids; radiation uses electromagnetic waves and can travel through a vacuum.",
		blocks: [
			{
				heading: "Convection",
				body: ["Convection occurs in liquids and gases as the heated substance moves.", "Warm fluid becomes less dense and rises; cooler, denser fluid sinks, creating convection currents."]
			},
			{
				heading: "Radiation",
				body: [
					"Radiation transfers heat using electromagnetic waves (infrared).",
					"Infrared can travel through a vacuum — that is how energy travels from the Sun to Earth.",
					"Dark surfaces are good absorbers and emitters. Shiny surfaces tend to reflect more infrared."
				]
			},
			{
				heading: "Insulation investigation",
				body: ["The 2026 investigation asks how insulation changes heat transfer to ice.", "Plan variables, controls, repeat trials, averages, graphs and a conclusion."]
			}
		]
	},
	{
		id: "sound-waves",
		topic: "sound",
		title: "Sound and waves",
		pack: "Sound",
		sources: ["Introduction to Sound", "Sound & Particles"],
		summary: "Sound is a mechanical longitudinal wave that needs a medium.",
		blocks: [{
			heading: "Key ideas",
			body: [
				"Sound starts with a vibration and travels through a medium.",
				"It is a mechanical longitudinal wave: compressions (crowded) and rarefactions (spread out).",
				"Amplitude is linked to loudness; frequency is linked to pitch.",
				"Sound travels faster through solids than gases because particles are closer together.",
				"Sound cannot travel through a vacuum; light can, because light is electromagnetic."
			]
		}]
	},
	{
		id: "em-spectrum",
		topic: "emspectrum",
		title: "The electromagnetic spectrum",
		pack: "The Electromagnetic Spectrum",
		sources: [
			"1. The Electromagnetic Spectrum.pptx",
			"EM Spectrum_worksheet.pptx",
			"Light Booklet- Year 9 (2025).docx"
		],
		summary: "EM waves are transverse, travel at 3 × 10⁸ m/s in vacuum, and obey v = fλ. Shorter wavelength means higher frequency, energy and hazard.",
		blocks: [
			{
				heading: "Shared properties of all EM waves",
				body: [
					"They transfer energy, are transverse, can be reflected, and can travel through a vacuum.",
					"They all travel at the speed of light in vacuum: 300 000 000 m/s (3.00 × 10⁸ m/s).",
					"They obey v = f × λ. Shorter wavelength ↔ higher frequency ↔ more energy ↔ more dangerous.",
					"Order of increasing frequency / decreasing wavelength: radio → microwave → infrared → visible → ultraviolet → X-ray → gamma.",
					"Red sits next to infrared; violet sits next to ultraviolet."
				]
			},
			{
				heading: "Radio and microwaves",
				body: [
					"Radio waves have the longest wavelengths. Uses: radio, television, some mobile signals.",
					"They mostly pass through the body and are not strongly absorbed.",
					"Microwaves: longer ones heat food by vibrating water molecules; shorter ones are used in radar and satellite links.",
					"Space waves / microwaves can be sent in a thin beam to a satellite because they diffract very little."
				]
			},
			{
				heading: "Infrared and visible",
				body: [
					"Infrared lies between microwaves and visible light. All objects emit IR; hotter objects emit more.",
					"Uses: heating, cooking, remotes, optical fibres, thermal cameras, ear thermometers, burglar sensors.",
					"Too much high-energy IR burns skin (the same heating you feel from a grill).",
					"Visible light is the only EM radiation the human eye detects (about 390–780 nm)."
				]
			},
			{
				heading: "Ultraviolet, X-rays and gamma",
				body: [
					"UV is emitted by very hot objects (the Sun), sparks, arc welding, tanning beds and black lights.",
					"Uses: tanning, fluorescent security inks and high-visibility clothing, banknote checks, vitamin D production.",
					"Hazards: sunburn, premature ageing, skin cancer, eye inflammation and cataracts. Cover up, hat, sunglasses, sunscreen.",
					"X-rays: produced when high-energy electrons hit a tungsten target in an X-ray tube. Used for medical and security imaging, cancer treatment and crystallography.",
					"Bones absorb more X-rays than soft tissue, so they appear white on film. Radiographers use lead shielding.",
					"Gamma rays have the shortest wavelength and highest energy. Emitted by radioactive materials. Used for medical imaging (tracers + gamma camera), industrial inspection, sterilising equipment and radiotherapy."
				]
			}
		],
		formulas: [{
			name: "Wave equation",
			formula: "v = fλ",
			note: "For all EM waves in vacuum, v = 3.00 × 10⁸ m/s"
		}],
		glossary: [{
			term: "Ionizing radiation",
			def: "High-energy waves (short UV, X-rays, gamma) that can ionize atoms and damage DNA."
		}, {
			term: "Fluorescence",
			def: "Absorbing UV and re-emitting lower-energy visible light."
		}]
	},
	{
		id: "visible-light",
		topic: "light",
		title: "Visible light",
		pack: "Visible Light",
		sources: ["2. Visible Light_.pptx", "Light Booklet- Year 9 (2025).docx"],
		summary: "Light travels in straight lines, carries energy, and is the only EM radiation we can see. We see because light enters our eyes.",
		blocks: [
			{
				heading: "Seeing",
				body: [
					"Light from a candle can travel just as far as light from the Sun — it does not stop just because it is daytime.",
					"We see because light travels from an object (emitted or reflected) into our eyes, not the other way around.",
					"Luminous objects give out light (Sun, globes). Non-luminous objects such as the Moon are seen by reflected light.",
					"Transparent materials transmit light clearly; translucent materials transmit some light but blur detail; opaque materials absorb or reflect, so you cannot see through them."
				]
			},
			{
				heading: "Day and night",
				body: ["As Earth rotates, the side facing the Sun is in daylight.", "Light travels in straight lines and Earth is opaque, so the far side is in shadow — night."]
			},
			{
				heading: "A model for light",
				body: [
					"Light is rectilinear: it travels in straight lines, which is why shadows form and we cannot see around corners.",
					"Ray diagrams model a narrow beam as a straight line with an arrow. Always use a sharp pencil and ruler.",
					"Scientists treat light as having a dual nature: wave and particle (photon)."
				]
			}
		]
	},
	{
		id: "reflection",
		topic: "light",
		title: "Reflection",
		pack: "Reflection",
		sources: ["3. Reflection.pptx", "Light Booklet- Year 9 (2025).docx"],
		summary: "Angle of incidence equals angle of reflection. Smooth surfaces give clear images; rough surfaces scatter light.",
		blocks: [
			{
				heading: "Law of reflection",
				body: [
					"The normal is a line at 90° to the surface at the point of incidence.",
					"Incident ray travels towards the surface; reflected ray travels away.",
					"Law of reflection: i = r. This applies to all waves, including EM waves.",
					"Angles are always measured between the ray and the normal, not the mirror."
				]
			},
			{
				heading: "Specular vs diffuse",
				body: ["Smooth, shiny surfaces (mirrors, still water) give clear / specular reflection — ordered rays, a clear image.", "Rough, dull surfaces give diffuse reflection — light scatters, so you do not see a mirror image. The law i = r still holds for each tiny bit of surface."]
			},
			{
				heading: "Curved mirrors",
				body: [
					"A curved mirror can be thought of as many tiny plane mirrors.",
					"Concave (caves in): parallel rays meet at a real focal point. Uses: makeup mirrors, headlights, some telescopes.",
					"Convex (bulges out): rays diverge and appear to come from a focal point behind the mirror. Uses: shop security, car side mirrors — wide field of view.",
					"A tighter curve moves the focal point."
				]
			}
		],
		glossary: [
			{
				term: "Incident ray",
				def: "The incoming ray that hits the surface."
			},
			{
				term: "Reflected ray",
				def: "The ray that bounces off the surface."
			},
			{
				term: "Normal",
				def: "A construction line at 90° to the surface."
			},
			{
				term: "Focal point",
				def: "Where reflected (or refracted) rays meet, or appear to meet."
			}
		]
	},
	{
		id: "refraction",
		topic: "light",
		title: "Refraction, TIR and lenses",
		pack: "Refraction",
		sources: ["4. Refraction.pptx", "Light Booklet- Year 9 (2025).docx"],
		summary: "Light bends when its speed changes. Denser medium: slower, towards the normal. Less dense: faster, away from the normal.",
		blocks: [
			{
				heading: "Why light bends",
				body: [
					"Refraction is the bending of light as it moves between different substances because its speed changes.",
					"Car-on-sand analogy: the first wheel slows in the sand so the car turns.",
					"Air → glass: light slows and bends towards the normal.",
					"Glass → air: light speeds up and bends away from the normal.",
					"This is why a pencil looks bent in water, a stone looks closer than it is, and a fish is not where it appears when speared from a boat."
				]
			},
			{
				heading: "Total internal reflection",
				body: [
					"When light goes from more dense to less dense, the angle of refraction is larger than i.",
					"If i increases, r can reach 90°. That incidence angle is the critical angle ic.",
					"If i ≥ ic, the light does not leave — it reflects inside with i = r. That is total internal reflection.",
					"TIR is used in optical fibres and some prisms (for example periscopes)."
				]
			},
			{
				heading: "Lenses",
				body: [
					"Convex (converging) lenses are thicker in the middle and can bring rays to a focus. They can form a real image on a screen.",
					"Concave (diverging) lenses are thinner in the middle and spread rays out. Images are usually upright, diminished and virtual.",
					"A thicker convex lens has a shorter focal length."
				]
			}
		],
		glossary: [{
			term: "Critical angle",
			def: "The angle of incidence (denser → less dense) that gives a 90° refracted ray."
		}, {
			term: "Total internal reflection",
			def: "All light reflects inside a denser medium when i ≥ ic."
		}]
	},
	{
		id: "colour",
		topic: "light",
		title: "Colour, dispersion and mixing",
		pack: "Colour and rainbows",
		sources: ["5. Colour Powerpoint.pptx", "Light Booklet- Year 9 (2025).docx"],
		summary: "White light is a mixture of colours. A prism disperses it because different wavelengths slow by different amounts.",
		blocks: [{
			heading: "Dispersion and rainbows",
			body: [
				"White light is made of many colours with different wavelengths.",
				"In a prism the colours slow by different amounts, so white light splits. This is dispersion.",
				"Order is always ROYGBIV: red, orange, yellow, green, blue, indigo, violet.",
				"Red has the longest visible wavelength and is bent least; violet is bent most.",
				"A rainbow is refraction (and reflection) in raindrops, not reflection only, and not because light speeds up in a prism.",
				"A second prism can recombine the spectrum into white light."
			]
		}, {
			heading: "Mixing coloured light",
			body: [
				"Primary colours of light are red, green and blue (additive mixing — different from paint).",
				"Red + green = yellow; blue + green = cyan; red + blue = magenta.",
				"Red + green + blue = white. No light = black.",
				"Yellow is complementary to blue; cyan to red; magenta to green.",
				"A colour television builds all colours from tiny red, green and blue dots.",
				"A red object mainly reflects red and absorbs other colours. White reflects all; black absorbs most."
			]
		}]
	},
	{
		id: "electricity-intro",
		topic: "electricity",
		title: "Electricity: current, voltage and materials",
		pack: "Year 9 Electricity 2025",
		sources: [
			"4. Introduction to Electricity 2025.pptx",
			"4. Year 9 Electricity 2025.pptx",
			"7. Circuit Inquiry.docx"
		],
		summary: "Current is the flow of electrons, pushed by voltage. Metals conduct because they have a sea of free electrons.",
		blocks: [{
			heading: "Key quantities",
			body: [
				"Current (I) is the flow of electrons around a connected circuit, measured in amps (A) with an ammeter.",
				"Voltage (V) is the push on electrons from the cell/battery, measured in volts (V) with a voltmeter.",
				"Resistance (R) measures how much a material tries to stop the flow, measured in ohms (Ω).",
				"A battery converts chemical energy into electrical energy. A bulb converts electrical energy into light (and heat).",
				"Electrons leave the negative terminal and are attracted to the positive terminal. The switch must be closed (complete circuit)."
			]
		}, {
			heading: "Conductors and insulators",
			body: [
				"Conductors (metals, graphite) allow charge to flow. Insulators (wood, plastic, rubber) do not.",
				"Metal atoms have outer electrons that can drift. This sea of electrons also explains why metals conduct heat.",
				"If voltage is constant, increasing resistance decreases current."
			]
		}],
		glossary: [{
			term: "Series",
			def: "Components in one continuous loop."
		}, {
			term: "Parallel",
			def: "Two or more separate loops off the same source."
		}]
	},
	{
		id: "electricity-circuits",
		topic: "electricity",
		title: "Series and parallel circuits",
		pack: "Current in series and parallel",
		sources: ["v5. 2025 Current in Series and Parallel circuits_.pptx", "2. PHET Electric Circuit Design Challenge.docx"],
		summary: "Series: current same everywhere, voltage shared. Parallel: voltage same across branches, current splits.",
		blocks: [
			{
				heading: "How to measure",
				body: ["Ammeter: always in series (in the same loop) as the component.", "Voltmeter: always in parallel (across) the component."]
			},
			{
				heading: "Series rules",
				body: [
					"Current is the same at every point.",
					"Supply voltage is shared between the components.",
					"Adding a battery increases current (greater push). Adding a bulb decreases current (greater resistance)."
				]
			},
			{
				heading: "Parallel rules",
				body: [
					"The source voltage is the same across each branch.",
					"Current splits between branches (equal split if the bulbs are the same).",
					"Advantages: extra appliances can be added without dimming the others; if one breaks the others still work. That is why homes use parallel lighting circuits."
				]
			},
			{
				heading: "Design challenge reminders",
				body: [
					"Three bulbs equally bright → same current through each, so a parallel arrangement.",
					"A switch that controls only some bulbs sits on those branches only.",
					"Kitchen lights that must switch together can share a branch; living room and bedroom stay independent."
				]
			}
		]
	},
	{
		id: "radio-isotopes",
		topic: "radioactivity",
		title: "Isotopes and atomic notation",
		pack: "Isotopes and Radioactivity booklet",
		sources: ["0. Year 9 Radioactivity Booklet 2020 SS (2).docx", "6. Radioactivity.pptx"],
		summary: "Isotopes are atoms of the same element (same protons) with different numbers of neutrons.",
		blocks: [
			{
				heading: "Atomic structure recap",
				body: [
					"Atomic number Z = number of protons. In a neutral atom, electrons = protons.",
					"Mass number A = protons + neutrons. Neutron number N = A − Z.",
					"Notation: ᴬZX, sometimes with N written as well.",
					"Almost all of the mass of an atom is in the nucleus."
				]
			},
			{
				heading: "Isotopes",
				body: [
					"Carbon-12 and carbon-14 both have 6 protons; C-14 has two extra neutrons.",
					"Chlorine-35 has 18 neutrons; chlorine-37 has 20 neutrons (Z = 17).",
					"Lithium-6 has 3 protons and 3 neutrons; lithium-7 has 3 protons and 4 neutrons.",
					"A stable isotope has a nucleus that is unlikely to break apart. Unstable isotopes are radioactive.",
					"Unstable if: too many neutrons for the protons, too many protons for the neutrons, or the nucleus is too heavy."
				]
			},
			{
				heading: "Relative atomic mass",
				body: [
					"RAM (Ar) is the average mass of all naturally occurring isotopes, weighted by abundance, on a scale where ¹²C is exactly 12.",
					"RAM = Σ (mass number × % abundance) / 100.",
					"Example: 20% mass 10 and 80% mass 11 → RAM = (10×20 + 11×80)/100 = 10.8."
				]
			}
		],
		formulas: [{
			name: "Neutron number",
			formula: "N = A − Z"
		}, {
			name: "Relative atomic mass",
			formula: "Ar = Σ(A × % abundance) / 100"
		}],
		worked: [{
			q: "Uranium-235 (Z = 92). Protons, electrons, neutrons?",
			a: "92 protons, 92 electrons (neutral), 235 − 92 = 143 neutrons."
		}]
	},
	{
		id: "radio-decay",
		topic: "radioactivity",
		title: "Radioactive decay: alpha, beta, gamma",
		pack: "Isotopes and Radioactivity booklet",
		sources: ["0. Year 9 Radioactivity Booklet 2020 SS (2).docx", "6. Radioactivity.pptx"],
		summary: "Unstable nuclei emit radiation to become more stable. Alpha, beta and gamma differ in what they are, how they change the nucleus, and how far they travel.",
		blocks: [
			{
				heading: "Alpha (α)",
				body: [
					"An alpha particle is a helium nucleus: 2 protons and 2 neutrons (⁴₂He / ⁴₂α).",
					"Mass number decreases by 4; atomic number decreases by 2. The new element is two places lower in the periodic table.",
					"Stopped by paper or skin. Highly ionising, so very damaging if the source is inside the body."
				]
			},
			{
				heading: "Beta (β)",
				body: [
					"A neutron changes into a proton plus an electron. The proton stays; the electron is fired out as a beta particle.",
					"Mass number stays the same; atomic number increases by 1.",
					"Stopped by thin aluminium. Less ionising than alpha."
				]
			},
			{
				heading: "Gamma (γ)",
				body: ["A high-energy electromagnetic photon. A and Z do not change — the nucleus just loses energy.", "Reduced by thick lead or concrete. Least ionising but most penetrating, so most dangerous from outside the body."]
			},
			{
				heading: "Ionising versus penetrating",
				body: [
					"Inside the body: alpha does the most damage.",
					"Outside the body: gamma is the main concern because alpha is stopped by skin.",
					"A Geiger counter clicks randomly because each decay is unpredictable.",
					"Background radiation is always there (rocks, Sun). Compare count rates with and without a source."
				]
			}
		]
	},
	{
		id: "radio-halflife",
		topic: "radioactivity",
		title: "Half-life",
		pack: "Isotopes and Radioactivity booklet",
		sources: ["0. Year 9 Radioactivity Booklet 2020 SS (2).docx", "6. Radioactivity.pptx"],
		summary: "Half-life is the time for the number of radioactive nuclei, or the count rate, to fall by 50%. It is different for every isotope.",
		blocks: [{
			heading: "What half-life means",
			body: [
				"After 1 half-life: 50% left (1/2). After 2: 25% (1/4). After 3: 12.5% (1/8). After 4: 6.25% (1/16).",
				"Activity is measured in becquerels: 1 Bq = 1 decay per second.",
				"The M&M lab models this: face-up sweets are undecayed parent nuclei; each shake is a half-life. It is random for each sweet, but the group follows a curve.",
				"Carbon-14 half-life is about 5730 years. Living things take in C-14; after death it decays, which is the basis of radiocarbon dating (useful to ~50 000 years)."
			]
		}],
		formulas: [{
			name: "Remaining fraction",
			formula: "remaining = (1/2)^n",
			note: "n = number of half-lives"
		}],
		worked: [
			{
				q: "Half-life 14 days, start 1080 Bq, after 4 weeks?",
				a: "4 weeks = 2 half-lives. 1080 → 540 → 270 Bq."
			},
			{
				q: "Half-life 5000 years. Fraction remaining after 20 000 years?",
				a: "n = 4, remaining = 1/16."
			},
			{
				q: "4000 Bq, half-life 12 h, down to 500 Bq?",
				a: "4000 → 2000 → 1000 → 500 is 3 half-lives = 36 hours."
			},
			{
				q: "100 g of radon-222, half-life 3.8 days, after 15.2 days?",
				a: "n = 4, remaining = 100 / 16 = 6.25 g."
			},
			{
				q: "C-14 half-life 5730 y. 70 mg after 17 190 y?",
				a: "n = 3, remaining = 70 / 8 = 8.75 mg."
			}
		]
	},
	{
		id: "radio-uses",
		topic: "radioactivity",
		title: "Uses of radioisotopes (SHE task)",
		pack: "Radioactivity — Science as a Human Endeavour",
		sources: [
			"Radioactivity SHE Task 2025.docx",
			"Student Activity_ Radioactivity – Good or Bad_.docx",
			"0. Year 9 Radioactivity Booklet 2020 SS (2).docx"
		],
		summary: "Nuclear technology has real benefits and real risks. The 2025 SHE task is a short group presentation with advantages, disadvantages and a bibliography.",
		blocks: [
			{
				heading: "The task",
				body: [
					"Radiation is around us (Sun, rocks). Cells can repair some damage, but stronger radiation and longer exposure increase risk — including cancer.",
					"Choose one use: nuclear medicine, nuclear power, radiocarbon dating, food irradiation, industrial testing, smoke detectors, and so on. Nuclear weapons are excluded.",
					"Presentation: introduce why it matters, how it works, advantages, disadvantages/risks, summary opinion, and a formatted bibliography (3–5+ sources)."
				]
			},
			{
				heading: "How common uses work",
				body: [
					"Medical tracers: a radioisotope replaces a non-radioactive isotope in a compound; its path is tracked (gamma camera). Choose a short half-life so activity falls quickly after the test.",
					"Radiotherapy: focused gamma or X-rays kill cancer cells. Dose is split and the beam is rotated to spare healthy tissue.",
					"Smoke detectors: americium-241 (alpha, half-life ~460 years). Smoke blocks some alpha particles and triggers the alarm.",
					"Thickness control: beta through paper; count rate tells the mill whether to move the rollers. Need a long half-life so the source stays steady.",
					"Carbon dating: remaining C-14 in once-living material. Used on charcoal, bone and shell, including Australian sites such as Lake Mungo.",
					"Food irradiation and sterilising equipment: penetrating gamma kills microbes."
				]
			},
			{
				heading: "Risks to weigh",
				body: ["Ionizing radiation can kill cells or damage DNA. Waste storage, accidents, and unequal access are ethical issues for power and medicine.", "Manage risk with shielding, distance, time, and matching the isotope (type + half-life) to the job."]
			}
		]
	},
	{
		id: "chemistry-atoms",
		topic: "chemistry",
		title: "Atomic structure and reactions",
		pack: "2026 Chemistry source pack",
		sources: [
			"1. Structure of Atoms.pptx",
			"2. Electron Configuration and Ions.pptx",
			"3. Intro to chemical reactions.pptx",
			"4. Acid reactions.pptx",
			"5. Combustion & corrosion reactions.pptx",
			"Year 9 Chemistry Checklist 2026"
		],
		summary: "Keep using the chemistry quiz bank from the hub. This section is a map of the 2026 pack so you can revise the same headings your class used.",
		blocks: [{
			heading: "Checklist of ideas",
			body: [
				"Structure of atoms: protons, neutrons, electrons, electron configuration.",
				"Ions and ionic compounds: metals lose electrons, non-metals gain electrons.",
				"Chemical reactions: reactants → products, conservation of atoms, balancing equations.",
				"Acid reactions, combustion and corrosion, endothermic vs exothermic labs, tests for common ions."
			]
		}]
	},
	{
		id: "reproduction",
		topic: "reproduction",
		title: "Reproduction",
		pack: "September 2026 reproduction pack",
		sources: [
			"Year 9 Science Practice Test: Reproduction",
			"Reproduction Recap",
			"Reproductive Strategies"
		],
		summary: "Sexual reproduction mixes genes; asexual reproduction copies the parent quickly.",
		blocks: [{
			heading: "Key comparisons",
			body: [
				"Sexual reproduction uses gametes and fertilisation, producing genetically varied offspring.",
				"Asexual reproduction does not use sex cells; offspring are genetically identical unless a mutation occurs.",
				"Gametes are haploid. Human body cells have 46 chromosomes; gametes have 23. Fertilisation forms a zygote.",
				"Internal fertilisation happens inside the body; external is common in water.",
				"Viviparous: live young. Oviparous: eggs. Ovoviviparous: eggs hatch inside the parent.",
				"Asexual strategies: binary fission, budding, fragmentation, vegetative propagation, spore formation, parthenogenesis."
			]
		}]
	},
	{
		id: "body-regulation",
		topic: "body",
		title: "Body regulation",
		pack: "Nervous and endocrine systems",
		sources: [
			"2025 NS and Endocrine Revision Checklist.docx",
			"2025 The Nervous System.pptx",
			"2025 Endocrine system.pptx",
			"2025 Nervous System Booklet_.docx"
		],
		summary: "Homeostasis is keeping a constant internal environment, using nervous and hormonal control.",
		blocks: [{
			heading: "From the 2025 pack",
			body: [
				"The nervous system uses electrical impulses along neurones and chemical messengers (neurotransmitters) at synapses.",
				"Myelin is the fatty insulation around an axon.",
				"The endocrine system uses hormones in the blood — slower but longer lasting.",
				"Negative feedback reverses a change (for example sweating to cool you down). Positive feedback increases a change."
			]
		}]
	},
	{
		id: "carbon-cycle",
		topic: "carbon",
		title: "Carbon cycle and Earth's spheres",
		pack: "Carbon cycle source pack",
		sources: [
			"4. Carbon Cycle Processes.pptx",
			"1. Earths Spheres 2026.pptx",
			"2. Carbon Basics Worksheet.docx",
			"Photosynthesis and respiration quiz / worksheets"
		],
		summary: "Carbon moves between atmosphere, biosphere, hydrosphere and geosphere by photosynthesis, respiration, combustion and decomposition.",
		blocks: [{
			heading: "Processes",
			body: [
				"Photosynthesis: carbon dioxide + water → glucose + oxygen (endothermic).",
				"Cellular respiration: glucose + oxygen → carbon dioxide + water + energy (exothermic).",
				"Incomplete combustion can make carbon monoxide and soot.",
				"Lithification turns sediment into sedimentary rock. Decomposition breaks down dead organisms."
			]
		}]
	}
];
function NotesPanel({ onDrill }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [activeId, setActiveId] = (0, import_react.useState)(noteSections[0]?.id ?? "");
	const [weak, setWeak] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const stats = loadStats();
		let worst = null;
		let rate = 2;
		for (const id of TOPIC_ORDER) {
			const s = stats[id];
			if (!s || s.t < 3) continue;
			const r = s.c / s.t;
			if (r < rate) {
				rate = r;
				worst = id;
			}
		}
		setWeak(worst);
	}, []);
	const visible = (0, import_react.useMemo)(() => filter === "all" ? noteSections : noteSections.filter((s) => s.topic === filter), [filter]);
	const active = visible.find((s) => s.id === activeId) ?? visible[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
			kicker: "Read",
			title: "Study notes",
			description: "Each pack matches an uploaded Year 9 file. Open a section, then use the lab at the bottom when it appears."
		}),
		weak && onDrill && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-col gap-3 rounded-[var(--radius-md)] border border-primary/30 bg-bg px-4 py-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wide text-primary",
				children: "A-path"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm",
				children: [
					"Lowest accuracy: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: catNames[weak] }),
					". Ten questions on that pack, then re-read the notes."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "action",
				onClick: () => onDrill(weak),
				children: "Drill this topic"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 overflow-x-auto pb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				label: "All packs",
				on: () => setFilter("all"),
				active: filter === "all"
			}), TOPIC_ORDER.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				label: catNames[id],
				on: () => {
					setFilter(id);
					const first = noteSections.find((s) => s.topic === id);
					if (first) setActiveId(first.id);
				},
				active: filter === id
			}, id))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-2",
				"aria-label": "Note sections",
				children: visible.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActiveId(s.id),
					className: cn("rounded-[var(--radius-sm)] border px-4 py-3 text-left transition-colors", active?.id === s.id ? "border-primary bg-primary/15 text-foreground" : "border-border bg-bg text-muted hover:text-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold text-foreground",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs text-muted",
						children: s.pack
					})]
				}, s.id))
			}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "fade-in min-w-0 rounded-[var(--radius-md)] border border-border bg-bg p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-wider text-primary",
						children: catNames[active.topic]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-2xl font-bold",
						children: active.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: active.summary
					}),
					active.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-bold",
							children: block.heading
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 list-disc space-y-2 pl-5 text-sm text-foreground/90",
							children: block.body.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
						})]
					}, block.heading)),
					active.formulas && active.formulas.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-bold",
							children: "Formulas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 grid gap-2",
							children: active.formulas.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-wide text-muted",
										children: f.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-base text-primary",
										children: f.formula
									}),
									f.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: f.note
									})
								]
							}, f.name))
						})]
					}),
					active.worked && active.worked.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-bold",
							children: "Worked examples from the pack"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-3",
							children: active.worked.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[var(--radius-sm)] border border-border bg-surface p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: w.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-secondary",
									children: w.a
								})]
							}, w.q))
						})]
					}),
					active.glossary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-lg font-bold",
							children: "Glossary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-2 space-y-2",
							children: active.glossary.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm font-bold text-primary",
								children: g.term
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm text-muted",
								children: g.def
							})] }, g.term))
						})]
					}),
					active.id === "em-spectrum" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightLab, { initial: "spectrum" }),
					active.id === "visible-light" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightLab, { initial: "spectrum" }),
					active.id === "reflection" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightLab, { initial: "reflection" }),
					active.id === "refraction" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightLab, { initial: "refraction" }),
					active.id === "colour" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightLab, { initial: "colour" }),
					active.id === "energy-work" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyTools, {}),
					active.id === "energy-sankey" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankeyLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnergyTools, { mode: "efficiency" })]
					}),
					active.id === "radio-halflife" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecayLab, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HalfLifeTool, {})]
					}),
					(active.id === "electricity-intro" || active.id === "electricity-circuits") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircuitLab, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-wider text-muted",
							children: "Source files"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 columns-1 gap-6 text-sm text-muted sm:columns-2",
							children: active.sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "break-inside-avoid py-0.5",
								children: s
							}, s))
						})]
					})
				]
			})]
		})
	] });
}
function FilterChip({ label, active, on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: on,
		className: cn("h-10 shrink-0 rounded-full border px-4 text-xs font-bold", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted"),
		children: label
	});
}
function PerformancePanel() {
	const [tick, setTick] = (0, import_react.useState)(0);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [stats, setStats] = (0, import_react.useState)(null);
	const [qStats, setQStats] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		setStats(loadStats());
		setQStats(loadQuestionStats());
	}, [tick]);
	function reset() {
		if (window.confirm("Reset all progress data?")) {
			clearStats();
			setOpen(null);
			setTick((t) => t + 1);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
			kicker: "Track",
			title: "Progress",
			description: "Weak areas show amber or red. Tap a topic to see every question. Games and quizzes both write here."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
			children: TOPIC_ORDER.map((key) => {
				const data = stats?.[key] ?? {
					c: 0,
					t: 0
				};
				const percent = data.t === 0 ? 0 : Math.round(data.c / data.t * 100);
				let status = "No data yet";
				let tone = "border-border";
				if (data.t > 0 && percent >= 80) {
					status = "A range";
					tone = "border-success";
				} else if (data.t > 0 && percent >= 50) {
					status = "Getting there";
					tone = "border-warning";
				} else if (data.t > 0) {
					status = "Needs review";
					tone = "border-danger";
				}
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(key),
					className: cn("rounded-[var(--radius-md)] border-b-4 bg-bg p-4 text-center transition-transform hover:-translate-y-0.5", tone),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold",
							children: catNames[key]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "my-1 font-mono text-3xl font-bold tabular-nums",
							children: [percent, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								data.c,
								" / ",
								data.t,
								" correct"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-bold",
							children: status
						})
					]
				}, key);
			})
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-lg font-bold",
					children: [catNames[open], " — individual questions"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Each question keeps its own record."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: questionsFor(open).map((q, i) => {
						const d = qStats[q.q] ?? {
							c: 0,
							t: 0
						};
						const percent = d.t ? Math.round(d.c / d.t * 100) : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold",
								children: [
									i + 1,
									". ",
									q.q
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: d.t ? `${d.c}/${d.t} correct (${percent}%)` : "Not attempted yet"
							})]
						}, q.q);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "danger",
			className: "mt-8",
			onClick: reset,
			children: "Reset progress"
		})
	] });
}
function QuizPanel({ initialTopic = "all" }) {
	const [topic, setTopic] = (0, import_react.useState)(initialTopic === "all" ? "all" : initialTopic);
	const [length, setLength] = (0, import_react.useState)(10);
	const [exam, setExam] = (0, import_react.useState)(false);
	const [remain, setRemain] = (0, import_react.useState)(0);
	const [items, setItems] = (0, import_react.useState)([]);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [score, setScore] = (0, import_react.useState)(null);
	const itemsRef = (0, import_react.useRef)(items);
	const submittedRef = (0, import_react.useRef)(submitted);
	itemsRef.current = items;
	submittedRef.current = submitted;
	(0, import_react.useEffect)(() => {
		if (initialTopic && initialTopic !== "all") setTopic(initialTopic);
	}, [initialTopic]);
	const available = (0, import_react.useMemo)(() => questionsFor(topic).length, [topic]);
	function start() {
		const pool = shuffle(questionsFor(topic));
		const n = Math.min(length, pool.length);
		setItems(pool.slice(0, n).map((q) => ({
			...q,
			options: q.options ? shuffle(q.options) : q.options
		})));
		setSubmitted(false);
		submittedRef.current = false;
		setScore(null);
		setRemain(exam ? n <= 10 ? 480 : 900 : 0);
	}
	function submit() {
		if (submittedRef.current) return;
		submittedRef.current = true;
		const updates = itemsRef.current.filter((q) => q.answered).map((q) => ({
			cat: q.cat,
			q: q.q,
			correct: answersMatch(q.userAns || "", q.a)
		}));
		if (updates.length) saveQuizResults(updates);
		setSubmitted(true);
		setScore(updates.filter((u) => u.correct).length);
		setRemain(0);
	}
	(0, import_react.useEffect)(() => {
		if (!exam || items.length === 0 || submitted) return;
		const id = window.setInterval(() => {
			setRemain((t) => {
				if (t <= 1) {
					window.setTimeout(() => submit(), 0);
					return 0;
				}
				return t - 1;
			});
		}, 1e3);
		return () => window.clearInterval(id);
	}, [
		exam,
		items.length,
		submitted
	]);
	const mins = Math.floor(remain / 60);
	const secs = String(remain % 60).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelTitle, {
			kicker: "Test",
			title: "Smart quizzes",
			description: `${qBank.length} questions from the Year 9 packs. Results save to Progress. Exam mode adds a clock and auto-submits.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-11 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground",
					value: topic,
					onChange: (e) => setTopic(e.target.value),
					"aria-label": "Quiz topic",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: "all",
						children: [
							"Mix all topics (",
							qBank.length,
							")"
						]
					}), TOPIC_ORDER.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: id,
						children: catNames[id]
					}, id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "h-11 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground",
					value: length,
					onChange: (e) => setLength(Number(e.target.value)),
					"aria-label": "Quiz length",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: 5,
							children: "5 questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: 10,
							children: "10 questions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: 20,
							children: "20 questions"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 items-center gap-2 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: exam,
						onChange: (e) => setExam(e.target.checked),
						className: "size-4 accent-primary"
					}), "Exam clock"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "action",
					onClick: start,
					disabled: available === 0,
					children: "Start quiz"
				})
			]
		}),
		exam && items.length > 0 && !submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 font-mono text-lg tabular-nums text-primary",
			children: [
				mins,
				":",
				secs
			]
		}),
		items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm text-muted",
			children: "Choose a topic and start a quiz to begin."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-4",
			children: [
				score !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[var(--radius-sm)] border border-success/40 bg-success/10 px-4 py-3 text-success",
					children: [
						"Saved ",
						score,
						" / ",
						items.filter((q) => q.answered).length,
						" correct. Check Progress for weak spots."
					]
				}),
				items.map((q, i) => {
					const correct = submitted && answersMatch(q.userAns || "", q.a);
					const showAnswer = submitted && q.answered;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-[var(--radius-md)] border border-border bg-bg p-4 md:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-wider text-primary",
								children: catNames[q.cat] ?? q.cat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-semibold text-foreground",
								children: [
									i + 1,
									". ",
									q.q
								]
							}),
							q.type === "mcq" && q.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-2",
								children: q.options.map((opt) => {
									let cls = "mcq";
									if (showAnswer && opt === (Array.isArray(q.a) ? q.a[0] : q.a)) cls = "correct";
									else if (showAnswer && opt === q.userAns && !correct) cls = "incorrect";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: submitted,
										onClick: () => {
											if (submitted) return;
											setItems((prev) => prev.map((item, idx) => idx === i ? {
												...item,
												userAns: opt,
												answered: true
											} : item));
										},
										className: ["w-full rounded-[var(--radius-sm)] border px-4 py-3 text-left text-sm font-semibold transition-colors", cls === "correct" ? "border-success bg-success text-success-foreground" : cls === "incorrect" ? "border-danger bg-danger text-danger-foreground" : q.userAns === opt ? "border-primary bg-primary/15 text-foreground" : "border-border bg-surface-hover text-foreground hover:border-primary"].join(" "),
										children: opt
									}, opt);
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-3 h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm text-foreground",
								placeholder: "Type your answer",
								value: q.userAns ?? "",
								disabled: submitted,
								onChange: (e) => {
									const value = e.target.value;
									setItems((prev) => prev.map((item, idx) => idx === i ? {
										...item,
										userAns: value,
										answered: true
									} : item));
								}
							}),
							showAnswer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-3 rounded-[var(--radius-sm)] border px-3 py-2 text-sm font-bold ${correct ? "border-success bg-success/15 text-success" : "border-danger bg-danger/15 text-danger"}`,
								children: correct ? "Correct" : `Incorrect. The accepted answer is: ${Array.isArray(q.a) ? q.a[0] : q.a}`
							})
						]
					}, `${q.q}-${i}`);
				}),
				!submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "action",
					size: "full",
					onClick: submit,
					children: "Submit answers and save progress"
				})
			]
		})
	] });
}
var TABS = [
	{
		id: "notes",
		label: "Notes",
		icon: BookOpenText
	},
	{
		id: "quizzes",
		label: "Quizzes",
		icon: PenLine
	},
	{
		id: "labs",
		label: "Labs",
		icon: Atom
	},
	{
		id: "games",
		label: "Games",
		icon: Gamepad2
	},
	{
		id: "stats",
		label: "Progress",
		icon: ChartColumn
	},
	{
		id: "calendar",
		label: "Planner",
		icon: CalendarDays
	}
];
function ScienceApp() {
	const [tab, setTab] = (0, import_react.useState)("notes");
	const [quizTopic, setQuizTopic] = (0, import_react.useState)("all");
	const counts = (0, import_react.useMemo)(() => ({
		notes: noteSections.length,
		questions: qBank.length
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-60 shrink-0 flex-col border-r border-border px-5 py-8 lg:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs leading-relaxed text-muted",
					children: "Year 9 science companion. Notes, labs and drills from your class packs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-8 flex flex-col gap-1",
					"aria-label": "StudyMate",
					children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
						active: tab === item.id,
						onClick: () => setTab(item.id),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }),
						label: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-auto pt-8 text-xs text-muted",
					children: [
						counts.notes,
						" note packs · ",
						counts.questions,
						" questions"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-md lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "-mx-1 mt-3 flex gap-1 overflow-x-auto pb-1",
					"aria-label": "StudyMate",
					children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavBtn, {
						active: tab === item.id,
						onClick: () => setTab(item.id),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }),
						label: item.label,
						compact: true
					}, item.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-6 md:px-8 md:py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fade-in",
					children: [
						tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesPanel, { onDrill: (topic) => {
							setQuizTopic(topic);
							setTab("quizzes");
						} }),
						tab === "quizzes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, { initialTopic: quizTopic }),
						tab === "labs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabsPanel, {}),
						tab === "games" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamesPanel, {}),
						tab === "stats" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerformancePanel, {}),
						tab === "calendar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPanel, {})
					]
				}, tab)
			})]
		})]
	});
}
function Wordmark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-xl font-bold leading-none tracking-tight",
			children: ["Study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "Mate"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted",
			children: "Year 9 science"
		})] })]
	});
}
function NavBtn({ active, onClick, icon, label, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-sm)] border text-sm font-semibold transition-colors", compact ? "h-10 px-3" : "h-11 w-full px-3", active ? "border-primary bg-primary text-primary-foreground" : "border-transparent text-muted hover:border-border hover:bg-surface-hover hover:text-foreground"),
		children: [icon, label]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScienceApp, {})
	});
}
//#endregion
export { Home as component };
