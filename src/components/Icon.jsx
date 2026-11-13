import {
  Award,
  BarChart3,
  BookOpen,
  Bot,
  Braces,
  Cable,
  ClipboardCheck,
  Cloud,
  Code2,
  Cpu,
  Crosshair,
  Database,
  Focus,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Puzzle,
  Repeat,
  School,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

const iconMap = {
  graduation: GraduationCap,
  shield: Shield,
  workflow: Workflow,
  pin: MapPin,
  focus: Focus,
  puzzle: Puzzle,
  crosshair: Crosshair,
  repeat: Repeat,
  book: BookOpen,
  school: School,
  award: Award,
  code: Code2,
  globe: Globe,
  database: Database,
  chart: BarChart3,
  layers: Layers,
  clipboard: ClipboardCheck,
  bot: Bot,
  braces: Braces,
  cable: Cable,
  cloud: Cloud,
  spark: Sparkles,
  cpu: Cpu,
};

export default function Icon({ name, size = 18 }) {
  const Glyph = iconMap[name];
  if (!Glyph) return null;
  return <Glyph size={size} strokeWidth={1.5} aria-hidden="true" />;
}
