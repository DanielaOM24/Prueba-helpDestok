
export type UserRole = "client" | "agent";
export type TicketStatus = "open" | "in_progress" | "resolved" | "closed";
export type TicketPriority = "low" | "medium" | "high" | "urgent";


export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;

}

export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    createdBy: string; // id de usuario cliente
    assignedTo?: string; // id de usuario agente
    createdAt: string;
    updatedAt: string;
}

export interface Comment {
    id: string;
    ticketId: string;
    authorId: string;
    message: string;
    createdAt: string;
}


export interface LoginForm {
    email: string;
    password: string;
}

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface CreateTicketForm {
    title: string;
    description: string;
    priority: TicketPriority;
}

export interface AddCommentForm {
    message: string;
}

export interface UpdateTicketForm {
    status?: TicketStatus;
    priority?: TicketPriority;
    assignedTo?: string;
}


export type ApiSuccess<T> = { data: T };
export type ApiError = { error: string };


export type TicketsResponse = Ticket[];
export interface TicketDetailResponse {
    ticket: Ticket;
    comments: Comment[];
}
