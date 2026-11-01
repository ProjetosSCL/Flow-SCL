import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDataset, type Filters, type Status } from "@/lib/mock-data";

type Key = keyof Filters;

interface MultiProps {
  label: string;
  options: string[];
  value: string[] | undefined;
  onChange: (v: string[]) => void;
}

function MultiFilter({ label, options, value, onChange }: MultiProps) {
  const [open, setOpen] = useState(false);
  const selected = value ?? [];
  const toggle = (v: string) => {
    if (selected.includes(v)) onChange(selected.filter((s) => s !== v));
    else onChange([...selected, v]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "min-h-[40px] h-10 sm:h-9 sm:min-h-0 gap-2 rounded-full border border-[#DFE7E4] bg-[#F4F7F6] hover:bg-[#DDFFE3] hover:text-[#103024] px-4 text-[#2B2D2C] font-sans touch-manipulation transition-all duration-150",
            selected.length > 0 &&
              "border-[#103024] bg-[#103024] text-white hover:bg-[#0b2219] hover:text-white font-semibold shadow-xs",
          )}
        >
          <span className="text-xs">{label}</span>
          {selected.length > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#94EA62] text-[#103024] font-bold num">
              {selected.length}
            </span>
          )}
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[260px] p-0 bg-white border border-[#DFE7E4] shadow-[0_10px_28px_rgba(16,48,36,0.08)] rounded-[20px] overflow-hidden"
        align="start"
      >
        <Command>
          <CommandInput
            placeholder={`Buscar ${label.toLowerCase()}...`}
            className="min-h-[44px] h-11 text-sm font-sans"
          />
          <CommandList>
            <CommandEmpty className="p-3 text-xs text-[#666D6A]">Nenhum resultado.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => {
                const sel = selected.includes(opt);
                return (
                  <CommandItem
                    key={opt}
                    onSelect={() => toggle(opt)}
                    className="min-h-[40px] py-2 px-3 text-xs cursor-pointer flex items-center hover:bg-[#F4F7F6] transition-colors"
                  >
                    <div
                      className={cn(
                        "mr-2.5 h-4 w-4 rounded-md border border-[#DFE7E4] grid place-items-center text-[#103024] shrink-0 transition-colors",
                        sel && "bg-[#94EA62] border-[#94EA62]",
                      )}
                    >
                      {sel && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="font-sans text-[#2B2D2C] leading-normal">{opt}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

interface Props {
  filters: Filters;
  setFilters: (f: Filters) => void;
  only?: Key[];
  dense?: boolean;
}

export function FiltersBar({ filters, setFilters, only, dense = false }: Props) {
  const show = (k: Key) => !only || only.includes(k);
  const { facets: FACETS } = useDataset();
  const set = <K extends Key>(k: K, v: Filters[K]) => setFilters({ ...filters, [k]: v });

  const activeChips: { key: Key; values: string[] }[] = [];
  (
    [
      "contratante",
      "prestador",
      "cidade",
      "bairro",
      "estado",
      "tecnico",
      "tipoEquipamento",
      "grupoServico",
      "servico",
      "status",
    ] as Key[]
  ).forEach((k) => {
    const v = filters[k] as string[] | undefined;
    if (v && v.length) activeChips.push({ key: k, values: v });
  });

  const totalActive = activeChips.reduce((a, b) => a + b.values.length, 0);

  return (
    <div
      className={cn(
        "rounded-[28px] bg-[#FFFFFF] border border-[#DFE7E4] shadow-none flex flex-wrap items-center",
        dense ? "p-2 gap-1.5" : "p-3.5 gap-2",
      )}
    >
      {show("contratante") && (
        <MultiFilter
          label="Contratante"
          options={FACETS.contratantes}
          value={filters.contratante}
          onChange={(v) => set("contratante", v)}
        />
      )}
      {show("prestador") && (
        <MultiFilter
          label="Prestador"
          options={FACETS.prestadores}
          value={filters.prestador}
          onChange={(v) => set("prestador", v)}
        />
      )}
      {show("cidade") && (
        <MultiFilter
          label="Cidade"
          options={FACETS.cidades}
          value={filters.cidade}
          onChange={(v) => set("cidade", v)}
        />
      )}
      {show("bairro") && (
        <MultiFilter
          label="Bairro"
          options={FACETS.bairros}
          value={filters.bairro}
          onChange={(v) => set("bairro", v)}
        />
      )}
      {show("estado") && (
        <MultiFilter
          label="Estado"
          options={FACETS.estados}
          value={filters.estado}
          onChange={(v) => set("estado", v)}
        />
      )}
      {show("tecnico") && (
        <MultiFilter
          label="Técnico"
          options={FACETS.tecnicos}
          value={filters.tecnico}
          onChange={(v) => set("tecnico", v)}
        />
      )}
      {show("tipoEquipamento") && (
        <MultiFilter
          label="Equipamento"
          options={FACETS.tiposEquipamento}
          value={filters.tipoEquipamento}
          onChange={(v) => set("tipoEquipamento", v)}
        />
      )}
      {show("grupoServico") && (
        <MultiFilter
          label="Grupo de serviço"
          options={FACETS.gruposServico}
          value={filters.grupoServico}
          onChange={(v) => set("grupoServico", v)}
        />
      )}
      {show("servico") && (
        <MultiFilter
          label="Serviço"
          options={FACETS.servicos}
          value={filters.servico}
          onChange={(v) => set("servico", v)}
        />
      )}
      {show("status") && (
        <MultiFilter
          label="Status"
          options={FACETS.status}
          value={filters.status as string[] | undefined}
          onChange={(v) => set("status", v as Status[])}
        />
      )}

      {totalActive > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setFilters({})}
          className="min-h-[40px] h-10 sm:h-9 sm:min-h-0 rounded-full px-4 text-xs text-[#666D6A] hover:text-[#103024] hover:bg-[#F4F7F6] gap-1.5 font-sans touch-manipulation"
        >
          <X className="h-3.5 w-3.5" />
          Limpar ({totalActive})
        </Button>
      )}
    </div>
  );
}
