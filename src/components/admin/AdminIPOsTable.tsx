
import { useState } from "react";
import { IpoDetail } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, PlusCircle, Trash, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface AdminIPOsTableProps {
  ipos: IpoDetail[];
}

export const AdminIPOsTable = ({ ipos }: AdminIPOsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  
  const filteredIpos = ipos.filter(
    ipo => 
      ipo.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ipo.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ipo.sector.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500 hover:bg-blue-600";
      case "open":
        return "bg-green-500 hover:bg-green-600";
      case "closed":
        return "bg-orange-500 hover:bg-orange-600";
      case "listed":
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const handleEdit = (id: string) => {
    toast({
      title: "Edit mode activated",
      description: `Editing IPO with ID: ${id}`,
    });
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Action required",
      description: `Are you sure you want to delete IPO with ID: ${id}?`,
      variant: "destructive",
    });
  };
  
  return (
    <Card className="animate-fade-in">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-bold">Manage IPOs</h2>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Search IPOs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64"
          />
          <Button className="whitespace-nowrap">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New IPO
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Ticker</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price Band</TableHead>
              <TableHead className="text-center">Overall Score</TableHead>
              <TableHead className="text-center">Recommendation</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIpos.map((ipo) => (
              <TableRow key={ipo.id} className="animate-slide-up">
                <TableCell className="font-medium">{ipo.companyName}</TableCell>
                <TableCell>{ipo.ticker}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={cn("capitalize", getStatusColor(ipo.status))}>
                    {ipo.status}
                  </Badge>
                </TableCell>
                <TableCell>{ipo.priceBand}</TableCell>
                <TableCell className="text-center">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-semibold",
                    ipo.overallScore >= 8 ? "bg-green-100 text-green-800" :
                    ipo.overallScore >= 6 ? "bg-blue-100 text-blue-800" :
                    ipo.overallScore >= 4 ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  )}>
                    {ipo.overallScore}/10
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {ipo.recommendation}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to={`/ipos/${ipo.id}`} className="cursor-pointer">
                          <Eye className="mr-2 h-4 w-4" />
                          <span>View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(ipo.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDelete(ipo.id)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
