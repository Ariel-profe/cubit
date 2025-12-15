import { UserIcon, ShieldIcon, CalendarDaysIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from 'date-fns/locale'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, UserAvatar, Badge } from "@/components";
import { User } from "@/lib/auth";

interface Props {
    user: User;
}

export const ProfileInformation = ({ user }: Props) => {

    return (
        <Card className="p-3">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <UserIcon className="size-5" />
                    Información del Perfil
                </CardTitle>
                <CardDescription>
                    Detalles de tu cuenta y estado actual
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex flex-col items-center gap-3">
                        <UserAvatar
                            name={user.name}
                            image={user.image}
                            className="size-32 sm:size-24"
                        />
                        {user.role && (
                            <Badge>
                                <ShieldIcon className="size-3" />
                                {user.role}
                            </Badge>
                        )}
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <h3 className="text-2xl font-semibold">{user.name}</h3>
                            <p className="text-muted-foreground">{user.email}</p>
                        </div>

                        <div className="space-y-2">
                            <div className="text-muted-foreground flex items-center gap-2 text-sm">
                                <CalendarDaysIcon className="size-4" />
                                Miembro desde
                            </div>
                            <p className="font-medium">
                                {format(user.createdAt, "d 'de' MMMM 'de' yyyy", { locale: es })}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}