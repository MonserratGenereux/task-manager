// Code generated by protoc-gen-go. DO NOT EDIT.
// source: reports/reports.proto

/*
Package reports is a generated protocol buffer package.

It is generated from these files:
	reports/reports.proto

It has these top-level messages:
	Empty
	AccountID
	HabitsReport
	HabitsUserReport
	TasksUserReport
	TasksReport
*/
package reports

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import habits "pb/habits"
import tasks "pb/tasks"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Empty struct {
}

func (m *Empty) Reset()                    { *m = Empty{} }
func (m *Empty) String() string            { return proto.CompactTextString(m) }
func (*Empty) ProtoMessage()               {}
func (*Empty) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

type AccountID struct {
	// Unique account id in the Task Manager system.
	Id int64 `protobuf:"varint,1,opt,name=id" json:"id,omitempty"`
}

func (m *AccountID) Reset()                    { *m = AccountID{} }
func (m *AccountID) String() string            { return proto.CompactTextString(m) }
func (*AccountID) ProtoMessage()               {}
func (*AccountID) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *AccountID) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type HabitsReport struct {
	RangeCounts []*HabitsReport_RangeCount `protobuf:"bytes,1,rep,name=range_counts,json=rangeCounts" json:"range_counts,omitempty"`
	Worst       *habits.Habit              `protobuf:"bytes,2,opt,name=worst" json:"worst,omitempty"`
	Best        *habits.Habit              `protobuf:"bytes,3,opt,name=best" json:"best,omitempty"`
}

func (m *HabitsReport) Reset()                    { *m = HabitsReport{} }
func (m *HabitsReport) String() string            { return proto.CompactTextString(m) }
func (*HabitsReport) ProtoMessage()               {}
func (*HabitsReport) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *HabitsReport) GetRangeCounts() []*HabitsReport_RangeCount {
	if m != nil {
		return m.RangeCounts
	}
	return nil
}

func (m *HabitsReport) GetWorst() *habits.Habit {
	if m != nil {
		return m.Worst
	}
	return nil
}

func (m *HabitsReport) GetBest() *habits.Habit {
	if m != nil {
		return m.Best
	}
	return nil
}

type HabitsReport_RangeCount struct {
	Color string `protobuf:"bytes,1,opt,name=color" json:"color,omitempty"`
	Count int64  `protobuf:"varint,2,opt,name=count" json:"count,omitempty"`
}

func (m *HabitsReport_RangeCount) Reset()                    { *m = HabitsReport_RangeCount{} }
func (m *HabitsReport_RangeCount) String() string            { return proto.CompactTextString(m) }
func (*HabitsReport_RangeCount) ProtoMessage()               {}
func (*HabitsReport_RangeCount) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2, 0} }

func (m *HabitsReport_RangeCount) GetColor() string {
	if m != nil {
		return m.Color
	}
	return ""
}

func (m *HabitsReport_RangeCount) GetCount() int64 {
	if m != nil {
		return m.Count
	}
	return 0
}

type HabitsUserReport struct {
	GoodHabits []*habits.Habit `protobuf:"bytes,1,rep,name=good_habits,json=goodHabits" json:"good_habits,omitempty"`
	BadHabits  []*habits.Habit `protobuf:"bytes,2,rep,name=bad_habits,json=badHabits" json:"bad_habits,omitempty"`
}

func (m *HabitsUserReport) Reset()                    { *m = HabitsUserReport{} }
func (m *HabitsUserReport) String() string            { return proto.CompactTextString(m) }
func (*HabitsUserReport) ProtoMessage()               {}
func (*HabitsUserReport) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *HabitsUserReport) GetGoodHabits() []*habits.Habit {
	if m != nil {
		return m.GoodHabits
	}
	return nil
}

func (m *HabitsUserReport) GetBadHabits() []*habits.Habit {
	if m != nil {
		return m.BadHabits
	}
	return nil
}

type TasksUserReport struct {
	Delayed  []*tasks.Task `protobuf:"bytes,1,rep,name=delayed" json:"delayed,omitempty"`
	DueToday []*tasks.Task `protobuf:"bytes,2,rep,name=dueToday" json:"dueToday,omitempty"`
}

func (m *TasksUserReport) Reset()                    { *m = TasksUserReport{} }
func (m *TasksUserReport) String() string            { return proto.CompactTextString(m) }
func (*TasksUserReport) ProtoMessage()               {}
func (*TasksUserReport) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *TasksUserReport) GetDelayed() []*tasks.Task {
	if m != nil {
		return m.Delayed
	}
	return nil
}

func (m *TasksUserReport) GetDueToday() []*tasks.Task {
	if m != nil {
		return m.DueToday
	}
	return nil
}

type TasksReport struct {
	CompletedTasks *TasksReport_CompletedTasks `protobuf:"bytes,1,opt,name=completed_tasks,json=completedTasks" json:"completed_tasks,omitempty"`
	AvailableTasks *TasksReport_AvailableTasks `protobuf:"bytes,2,opt,name=available_tasks,json=availableTasks" json:"available_tasks,omitempty"`
}

func (m *TasksReport) Reset()                    { *m = TasksReport{} }
func (m *TasksReport) String() string            { return proto.CompactTextString(m) }
func (*TasksReport) ProtoMessage()               {}
func (*TasksReport) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5} }

func (m *TasksReport) GetCompletedTasks() *TasksReport_CompletedTasks {
	if m != nil {
		return m.CompletedTasks
	}
	return nil
}

func (m *TasksReport) GetAvailableTasks() *TasksReport_AvailableTasks {
	if m != nil {
		return m.AvailableTasks
	}
	return nil
}

type TasksReport_CompletedTasks struct {
	OnTime     int64 `protobuf:"varint,1,opt,name=onTime" json:"onTime,omitempty"`
	BeforeTime int64 `protobuf:"varint,2,opt,name=beforeTime" json:"beforeTime,omitempty"`
	Delayed    int64 `protobuf:"varint,3,opt,name=delayed" json:"delayed,omitempty"`
}

func (m *TasksReport_CompletedTasks) Reset()                    { *m = TasksReport_CompletedTasks{} }
func (m *TasksReport_CompletedTasks) String() string            { return proto.CompactTextString(m) }
func (*TasksReport_CompletedTasks) ProtoMessage()               {}
func (*TasksReport_CompletedTasks) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5, 0} }

func (m *TasksReport_CompletedTasks) GetOnTime() int64 {
	if m != nil {
		return m.OnTime
	}
	return 0
}

func (m *TasksReport_CompletedTasks) GetBeforeTime() int64 {
	if m != nil {
		return m.BeforeTime
	}
	return 0
}

func (m *TasksReport_CompletedTasks) GetDelayed() int64 {
	if m != nil {
		return m.Delayed
	}
	return 0
}

type TasksReport_AvailableTasks struct {
	Remaining int64 `protobuf:"varint,1,opt,name=remaining" json:"remaining,omitempty"`
	ForToday  int64 `protobuf:"varint,2,opt,name=forToday" json:"forToday,omitempty"`
	Delayed   int64 `protobuf:"varint,3,opt,name=delayed" json:"delayed,omitempty"`
}

func (m *TasksReport_AvailableTasks) Reset()                    { *m = TasksReport_AvailableTasks{} }
func (m *TasksReport_AvailableTasks) String() string            { return proto.CompactTextString(m) }
func (*TasksReport_AvailableTasks) ProtoMessage()               {}
func (*TasksReport_AvailableTasks) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{5, 1} }

func (m *TasksReport_AvailableTasks) GetRemaining() int64 {
	if m != nil {
		return m.Remaining
	}
	return 0
}

func (m *TasksReport_AvailableTasks) GetForToday() int64 {
	if m != nil {
		return m.ForToday
	}
	return 0
}

func (m *TasksReport_AvailableTasks) GetDelayed() int64 {
	if m != nil {
		return m.Delayed
	}
	return 0
}

func init() {
	proto.RegisterType((*Empty)(nil), "reports.Empty")
	proto.RegisterType((*AccountID)(nil), "reports.AccountID")
	proto.RegisterType((*HabitsReport)(nil), "reports.HabitsReport")
	proto.RegisterType((*HabitsReport_RangeCount)(nil), "reports.HabitsReport.RangeCount")
	proto.RegisterType((*HabitsUserReport)(nil), "reports.HabitsUserReport")
	proto.RegisterType((*TasksUserReport)(nil), "reports.TasksUserReport")
	proto.RegisterType((*TasksReport)(nil), "reports.TasksReport")
	proto.RegisterType((*TasksReport_CompletedTasks)(nil), "reports.TasksReport.CompletedTasks")
	proto.RegisterType((*TasksReport_AvailableTasks)(nil), "reports.TasksReport.AvailableTasks")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for ReportsService service

type ReportsServiceClient interface {
	GetHabitsReport(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*HabitsReport, error)
	GetHabitsUserReport(ctx context.Context, in *AccountID, opts ...grpc.CallOption) (*HabitsUserReport, error)
	GetTasksReport(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*TasksReport, error)
	GetTasksUserReport(ctx context.Context, in *AccountID, opts ...grpc.CallOption) (*TasksUserReport, error)
}

type reportsServiceClient struct {
	cc *grpc.ClientConn
}

func NewReportsServiceClient(cc *grpc.ClientConn) ReportsServiceClient {
	return &reportsServiceClient{cc}
}

func (c *reportsServiceClient) GetHabitsReport(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*HabitsReport, error) {
	out := new(HabitsReport)
	err := grpc.Invoke(ctx, "/reports.ReportsService/GetHabitsReport", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reportsServiceClient) GetHabitsUserReport(ctx context.Context, in *AccountID, opts ...grpc.CallOption) (*HabitsUserReport, error) {
	out := new(HabitsUserReport)
	err := grpc.Invoke(ctx, "/reports.ReportsService/GetHabitsUserReport", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reportsServiceClient) GetTasksReport(ctx context.Context, in *Empty, opts ...grpc.CallOption) (*TasksReport, error) {
	out := new(TasksReport)
	err := grpc.Invoke(ctx, "/reports.ReportsService/GetTasksReport", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reportsServiceClient) GetTasksUserReport(ctx context.Context, in *AccountID, opts ...grpc.CallOption) (*TasksUserReport, error) {
	out := new(TasksUserReport)
	err := grpc.Invoke(ctx, "/reports.ReportsService/GetTasksUserReport", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for ReportsService service

type ReportsServiceServer interface {
	GetHabitsReport(context.Context, *Empty) (*HabitsReport, error)
	GetHabitsUserReport(context.Context, *AccountID) (*HabitsUserReport, error)
	GetTasksReport(context.Context, *Empty) (*TasksReport, error)
	GetTasksUserReport(context.Context, *AccountID) (*TasksUserReport, error)
}

func RegisterReportsServiceServer(s *grpc.Server, srv ReportsServiceServer) {
	s.RegisterService(&_ReportsService_serviceDesc, srv)
}

func _ReportsService_GetHabitsReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportsServiceServer).GetHabitsReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/reports.ReportsService/GetHabitsReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportsServiceServer).GetHabitsReport(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReportsService_GetHabitsUserReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AccountID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportsServiceServer).GetHabitsUserReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/reports.ReportsService/GetHabitsUserReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportsServiceServer).GetHabitsUserReport(ctx, req.(*AccountID))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReportsService_GetTasksReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportsServiceServer).GetTasksReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/reports.ReportsService/GetTasksReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportsServiceServer).GetTasksReport(ctx, req.(*Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReportsService_GetTasksUserReport_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AccountID)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportsServiceServer).GetTasksUserReport(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/reports.ReportsService/GetTasksUserReport",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportsServiceServer).GetTasksUserReport(ctx, req.(*AccountID))
	}
	return interceptor(ctx, in, info, handler)
}

var _ReportsService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "reports.ReportsService",
	HandlerType: (*ReportsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetHabitsReport",
			Handler:    _ReportsService_GetHabitsReport_Handler,
		},
		{
			MethodName: "GetHabitsUserReport",
			Handler:    _ReportsService_GetHabitsUserReport_Handler,
		},
		{
			MethodName: "GetTasksReport",
			Handler:    _ReportsService_GetTasksReport_Handler,
		},
		{
			MethodName: "GetTasksUserReport",
			Handler:    _ReportsService_GetTasksUserReport_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "reports/reports.proto",
}

func init() { proto.RegisterFile("reports/reports.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 537 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x84, 0x54, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0x6e, 0x1c, 0xd2, 0x34, 0xe3, 0xe0, 0xc0, 0xb4, 0x45, 0xc6, 0x20, 0x14, 0x5c, 0x21, 0x72,
	0x40, 0x8e, 0x14, 0x2e, 0x15, 0xb7, 0x92, 0x42, 0x41, 0xe2, 0x64, 0xc2, 0x85, 0x4b, 0xb4, 0xb6,
	0xb7, 0xc1, 0xc2, 0xf1, 0x5a, 0xbb, 0x9b, 0xa2, 0xbc, 0x07, 0xaf, 0xc6, 0x93, 0xf0, 0x02, 0xc8,
	0xbb, 0x6b, 0xc7, 0x8e, 0x02, 0x5c, 0xe2, 0xcc, 0x7c, 0xdf, 0x7c, 0xdf, 0xec, 0xec, 0x0f, 0x9c,
	0x73, 0x5a, 0x30, 0x2e, 0xc5, 0xd4, 0x7c, 0x83, 0x82, 0x33, 0xc9, 0xb0, 0x6f, 0x42, 0xef, 0xf4,
	0x1b, 0x89, 0x52, 0x29, 0xa6, 0xfa, 0xa3, 0x51, 0xef, 0xa1, 0x24, 0xe2, 0xbb, 0x98, 0xaa, 0x5f,
	0x9d, 0xf2, 0xfb, 0xd0, 0x7b, 0xb7, 0x2e, 0xe4, 0xd6, 0x7f, 0x02, 0x83, 0xab, 0x38, 0x66, 0x9b,
	0x5c, 0x7e, 0xbc, 0x46, 0x07, 0xac, 0x34, 0x71, 0x3b, 0xe3, 0xce, 0xa4, 0x1b, 0x5a, 0x69, 0xe2,
	0xff, 0xea, 0xc0, 0xf0, 0x83, 0x52, 0x0a, 0x95, 0x3e, 0xce, 0x61, 0xc8, 0x49, 0xbe, 0xa2, 0x4b,
	0x55, 0x21, 0xdc, 0xce, 0xb8, 0x3b, 0xb1, 0x67, 0xe3, 0xa0, 0xea, 0xa6, 0x49, 0x0e, 0xc2, 0x92,
	0x39, 0x2f, 0x89, 0xa1, 0xcd, 0xeb, 0xff, 0x02, 0x2f, 0xa0, 0xf7, 0x83, 0x71, 0x21, 0x5d, 0x6b,
	0xdc, 0x99, 0xd8, 0xb3, 0xfb, 0x81, 0x69, 0x56, 0x15, 0x87, 0x1a, 0xc3, 0xe7, 0x70, 0x2f, 0xa2,
	0x42, 0xba, 0xdd, 0x43, 0x1c, 0x05, 0x79, 0x97, 0x00, 0x3b, 0x0b, 0x3c, 0x83, 0x5e, 0xcc, 0x32,
	0xc6, 0x55, 0xfb, 0x83, 0x50, 0x07, 0x3a, 0xbb, 0xc9, 0xb5, 0x57, 0x37, 0xd4, 0x81, 0x5f, 0xc0,
	0x03, 0xdd, 0xe9, 0x17, 0x41, 0xb9, 0x59, 0x5a, 0x00, 0xf6, 0x8a, 0xb1, 0x64, 0xa9, 0x8d, 0xcc,
	0xca, 0xf6, 0x7c, 0xa1, 0x64, 0xe8, 0x4a, 0x7c, 0x05, 0x10, 0x91, 0x9a, 0x6e, 0x1d, 0xa2, 0x0f,
	0x22, 0x62, 0xd8, 0x3e, 0x81, 0xd1, 0xa2, 0x1c, 0x7f, 0xc3, 0xf0, 0x05, 0xf4, 0x13, 0x9a, 0x91,
	0x2d, 0x4d, 0x8c, 0x99, 0x1d, 0xe8, 0x1d, 0x2a, 0x89, 0x61, 0x85, 0xe1, 0x4b, 0x38, 0x49, 0x36,
	0x74, 0xc1, 0x12, 0xb2, 0x35, 0x2e, 0x2d, 0x5e, 0x0d, 0xfa, 0xbf, 0x2d, 0xb0, 0x95, 0x87, 0xd1,
	0xff, 0x04, 0xa3, 0x98, 0xad, 0x8b, 0x8c, 0x4a, 0x9a, 0x2c, 0x55, 0x85, 0x1a, 0x8d, 0x3d, 0xbb,
	0xa8, 0xb7, 0xab, 0x41, 0x0f, 0xe6, 0x15, 0x57, 0x27, 0x9d, 0xb8, 0x15, 0x97, 0x6a, 0xe4, 0x8e,
	0xa4, 0x19, 0x89, 0x32, 0x6a, 0xd4, 0xac, 0x7f, 0xa8, 0x5d, 0x55, 0x5c, 0xa3, 0x46, 0x5a, 0xb1,
	0x17, 0x81, 0xd3, 0xf6, 0xc3, 0x47, 0x70, 0xcc, 0xf2, 0x45, 0xba, 0xa6, 0xe6, 0xf8, 0x99, 0x08,
	0x9f, 0x01, 0x44, 0xf4, 0x96, 0x71, 0xaa, 0x30, 0xbd, 0x8b, 0x8d, 0x0c, 0xba, 0xbb, 0x29, 0x76,
	0x15, 0x58, 0x85, 0x5e, 0x02, 0x4e, 0xbb, 0x0b, 0x7c, 0x0a, 0x03, 0x4e, 0xd7, 0x24, 0xcd, 0xd3,
	0x7c, 0x65, 0x6c, 0x76, 0x09, 0xf4, 0xe0, 0xe4, 0x96, 0xf1, 0x6a, 0xd0, 0x25, 0x58, 0xc7, 0x7f,
	0x77, 0x99, 0xfd, 0xb4, 0xc0, 0xd1, 0x6b, 0x16, 0x9f, 0x29, 0xbf, 0x4b, 0x63, 0x8a, 0x6f, 0x60,
	0x74, 0x43, 0x65, 0xeb, 0xde, 0x38, 0xf5, 0x90, 0xd4, 0xad, 0xf3, 0xce, 0x0f, 0xde, 0x18, 0xff,
	0x08, 0xdf, 0xc3, 0x69, 0x5d, 0xdb, 0x38, 0x2b, 0x58, 0xf3, 0xeb, 0xcb, 0xea, 0x3d, 0xde, 0xd3,
	0xd8, 0xd1, 0xfd, 0x23, 0xbc, 0x04, 0xe7, 0x86, 0xca, 0xe6, 0x71, 0xd8, 0x6f, 0xe1, 0xec, 0xd0,
	0xbe, 0xf9, 0x47, 0x78, 0x0d, 0x58, 0x55, 0xfe, 0xa7, 0x01, 0xb7, 0xad, 0xd0, 0xf4, 0x7f, 0x3b,
	0xfc, 0x0a, 0x45, 0x54, 0x3d, 0x52, 0xd1, 0xb1, 0x7a, 0x74, 0x5e, 0xff, 0x09, 0x00, 0x00, 0xff,
	0xff, 0xea, 0x3c, 0xa5, 0xa0, 0xbe, 0x04, 0x00, 0x00,
}